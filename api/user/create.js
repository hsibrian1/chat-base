export default async (req, res) => {
  const { idToken, data } = req.body
  try {
    console.log(idToken, data)
    res.status(200).json({ message: 'Successfully!', data })
  } catch (e) {
    console.error(e)
    res
      .status(e.status || 500)
      .json(e.message ? e : { message: 'Y los billetes?' })
  }
}
