import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const MovieComponent = () => {
    const Movies = [
        { id: 1, tytul: "Dzień Świra", gatunek: "Komedia", licznik: 0 },
        { id: 2, tytul: "Dzień Kozaka", gatunek: "Obyczajowy", licznik: 0 },
        { id: 3, tytul: "Dzień Noc", gatunek: "Horror", licznik: 0 },
        { id: 4, tytul: "Dzień u Wiesława", gatunek: "Thriller", licznik: 0 },
        { id: 5, tytul: "Dzień z Rolnikami", gatunek: "Sci-Fi", licznik: 0 },
    ]
    const [filmy, setFilmy] = useState(Movies);
    const handleWatch = (id) => {
        setFilmy(prev => prev.map(f => f.id === id ? { ...f, licznik: f.licznik + 1 } : f))
    }
    //    const total = filmy.reduce((p,f) => p + f.licznik, 0);
    const handleResetAll = () => {
        setFilmy(prev => prev.map(f => ({ ...f, licznik: 0 })))
    }
    //    let total = 0;
    //    for(let i = 0; i < filmy.length; i++) {
    //     total += filmy[i].licznik;
    //    }
    const [gatunek, setGatunek] = useState("Wszystkie")
    let filtered = gatunek === "Wszystkie" ? filmy : filmy.filter(f => f.gatunek === gatunek)

    let total = filtered.reduce((wynik, f) => wynik + f.licznik, 0)


    let bestMovie = filtered.reduce((max, film) => Math.max(max, film.licznik), 0)
    return (
        <>
            <div className="container my-4">
                <h2 className="mb-4">Łączna liczba wyświetleń: {total}</h2>
                <select value={gatunek} onChange={e => setGatunek(e.target.value)}>
                    <option>Wszystkie</option>
                    <option>Komedia</option>
                    <option>Horror</option>
                    <option>Thriller</option>
                    <option>Obyczajowy</option>
                    <option>Sci-Fi</option>
                </select>

                {filtered.length === 0 ? (
                    <p className="alert alert-info mt-4">Brak filmów w tej kategorii</p>
                ) : (
                    <div className="row">
                        {filtered.map(f => (
                            <div className="col-md-4" key={f.id}>
                                <div className={`card mb-4 ${f.licznik === 0 ? '' : f.licznik === bestMovie ? 'border-success border-3' : ''}`}>
                                    <div className="card-body">
                                        <h5 className="card-title">{f.tytul}</h5>
                                        <p className="card-text">Gatunek: {f.gatunek}</p>
                                        <p className="card-text">Wyświetlenia: {f.licznik}</p>
                                        <button className="btn btn-primary" onClick={() => handleWatch(f.id)}>OBEJRZYJ</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={handleResetAll}>RESETUJ WSZYSTKIE</button>
                </div>
            </div>
        </>
    )
}

export default MovieComponent