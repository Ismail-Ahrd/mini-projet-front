export interface ResultatResponse {
  currentPage: number
  totalPages: number
  pageSize: number
  resultatPrelevementDTOS: ResultatPrelevementDtos[]
}

export interface ResultatPrelevementDtos {
  id: number
  dateBA: string
  numeroBA: number
  conforme: boolean
  idPersonne: number
  idPrelevement: number
}
