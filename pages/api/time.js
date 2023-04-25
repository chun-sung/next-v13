export default function time(req, res) {

    let time = new Date();    
    return res.status(200).json(time.getMinutes())
    
}