export interface UserPUTRequest {
  "Id": number
  "NomeCompleto": string,
  "Username": string
  "Senha": string | undefined
  "DataNascimento": string
  "Estado": string
  "Pais": string
  "ativo": boolean
}