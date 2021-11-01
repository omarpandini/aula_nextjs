export default function hadler(req,res) {
    const codigo = req.query.codigo

    res.status(200).json({
        id:codigo,
        nome:'Maria '+codigo
    })
}