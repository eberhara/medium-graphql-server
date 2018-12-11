const context = ({ req }) => ({
  token: req.headers.authorization
})

export default context
