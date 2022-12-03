
export const Hire = () => {
    return (
        <>
            <div>
                <p>Nome</p>
                <a href="/">Perfil</a>
            </div>
            <div className="hire">
                <form action="">
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" />
                    <label htmlFor="address">Endereço</label>
                    <input type="text" name="address" />
                    <label htmlFor="description">Descrição</label>
                    <input type="text" name="description" />
                    <label htmlFor="date">Data</label>
                    <input type="date" name="date" id="" />
                    <label htmlFor="time">Horário</label>
                    <input type="time" name="time" id="" />
                    <input type="submit" value="Confirmar" />
                </form>
            </div>
        </>
    )
}