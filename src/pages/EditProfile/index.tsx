

export const EditProfile = () => {
    return(
        <div>
            <label htmlFor="name">Nome completo</label>
            <input type="text" name="name" id="" />
            <label htmlFor="address">Endereço</label>
            <input type="text" name="" id="" />
            <label htmlFor="phone">Telefone</label>
            <input type="tel" name="phone" id="" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
            <label htmlFor="category">Categoria</label>
            <input type="text" name="category" id="" />
            <label htmlFor="service">Serviços oferecidos</label>
            <input type="text" name="service" id="" />
            <label htmlFor="description">Descrição dos serviços</label>
            <input type="text" name="description" id="" />
            <label htmlFor="currentPass">Senha atual</label>
            <input type="password" name="currentPass" id="" />
            <label htmlFor="newPass">Nova senha</label>
            <input type="password" name="newPass" id="" />
            <label htmlFor="confirmation">Confirmar senha</label>
            <input type="submit" value="" />
        </div>
    )
}