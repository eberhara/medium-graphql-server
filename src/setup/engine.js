const generateClientInfo = ({ context: { clientHeaders } }) => ({
  clientName: 'Some name',
  clientVersion: '1.0.0'
})
  
export default {
  apiKey: 'MY_ENGINE_KEY',
  generateClientInfo
}