export interface IAuthToken{
  token:string,expiresIn:number
}
export interface IAuthUser{
  id: number,
  username?: string;
  fullname?:string
}
export interface IAuth{
  user: IAuthUser,
  auth:IAuthToken
}