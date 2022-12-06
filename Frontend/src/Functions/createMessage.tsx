import Client from "./Client"

const createMessage = (date: number, text: string, cname: string): HTMLElement => {
    const div = document.createElement('div'),
          p1 = document.createElement('p'),
          p2 = document.createElement('p')


    div.className = cname

    p1.className = 'msg'
    p1.textContent = text

    p2.className = 'date'
    p2.textContent = Client.numberToDateString(date)

    div.appendChild(p1)
    div.appendChild(p2)

    return div
}

export default createMessage