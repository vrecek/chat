import Client, { CustomTypes, FETCH, LOAD } from "./Client"



interface QueryInfo {
    url: string,
    type: FETCH.RequestType,
    uploadType?: 'normal' | 'multer'
    body?: any
}
interface LoadingInfo {
    position?: LOAD.LoadingPosition,
    appendTo?: HTMLElement,
    bgClr?: string
}



type SuccessCB<T> = (data: T) => void
type ErrorCB = (err: FETCH.MixReturn<any>) => void
type FinallyCB = () => void



const DefaultLoadingState: CustomTypes.LoadingState = {
    finished: false,
    data: null,
    error: null
}



const fetchFunction = async <T = any>(query: QueryInfo, load: LoadingInfo, successCb: SuccessCB<T>, errorCb: ErrorCB, finallyCb?: FinallyCB) => {
    const {url, type, body, uploadType} = query,
          {position, bgClr, appendTo} = load,
          f = new Client.Fetches(),
          l = new Client.Loading()


    if(position && appendTo) {
        l.defaultStyleDots({
            position,
            backgroundClr: bgClr
        })
        
        l.append(appendTo)
    }


    try {
        let data: FETCH.MixReturn<T> | null = null

        uploadType === 'multer'
            ? data = await f.multer<T>(url, type, body)
            : data = await f.mix<T>(url, type, body)

            
        successCb(data.json)

    }catch(err: any) {
        errorCb(err)

    }finally { 
        l.remove() 

        if(finallyCb) finallyCb()
    }
}

export default fetchFunction
export {
    DefaultLoadingState
}