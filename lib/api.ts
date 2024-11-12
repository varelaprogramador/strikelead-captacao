import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // URL da API
  // withCredentials: true, // Para enviar cookies
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo
  },
})

api.interceptors.response.use(
  response => {
    // Qualquer código de status dentro do intervalo de 2xx causa a execução desta função
    return response
  },
  error => {
    // Qualquer código de status fora do intervalo de 2xx causa a execução desta função
    if (error.response) {
      // A resposta foi recebida, mas com um status de erro
      // console.error('Error response:', error.response)
      return Promise.reject(
        new Error(error.response.data?.message || 'Erro inesperado na API'),
      )
    } else if (error.request) {
      // Nenhuma resposta foi recebida
      // console.error('No response received:', error.request)
      return Promise.reject(new Error('Nenhuma resposta recebida da API'))
    } else {
      // Erro ao configurar a solicitação
      // console.error('Error setting up request:', error.message)
      return Promise.reject(new Error('Erro ao configurar a solicitação'))
    }
  },
)
