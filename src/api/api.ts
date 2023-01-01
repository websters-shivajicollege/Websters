import axios from "axios"

export const fetchTeamMembers =  async () => {
  try {
    const results = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=M8fdClULepQ7xpHd9X0MRwQdwmifSmhO1p5oPTDXN7nDnOGsXwpPObWq8YZXVVIHsNxwmPe_pXDvlJNR7b_30G_-MnLdPdhIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFW5m147d3Ki09WbQnJ5A94GPy1ZcA2P-AVPRfnqgp3i7XI3VWAI6e7PLE2gYpGuYheOuYtB1xOkftsjX1fhMkmYSC743lNrfg&lib=M3mc0D_yxsIkNVleG_JRA2qi_d-phDA33')

    return results.data;
  } catch (err) {
    throw new Error('net net connected')
  }
}