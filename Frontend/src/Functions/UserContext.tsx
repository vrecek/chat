import React from "react"
import UserType from "../Interfaces/UserType"
import { Aliases } from "./Client"

export type PossibleUser = Aliases.Possible<UserType>

const UserContext: React.Context<PossibleUser> = React.createContext<PossibleUser>(null)

export default UserContext