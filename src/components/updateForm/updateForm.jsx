export function UpdateForm({ name, description, value, img_url, id, getProdutcs }) {
    
    function update() {
        
    }

    <div>
        <form>
            <div>
                <label>Link da imagem</label>
                <input
                    type="text"
                    placeholder='cole aqui a url da imagem'
                    onChange={(e) => setImg_url(e.target.value)}
                // value={img_url}
                />
            </div>
            <div>
                <label>Nome</label>
                <input

                    type="text"
                    placeholder='Digite o nome do produto'
                    onChange={(e) => setName(e.target.value)}
                // value={name}
                />
            </div>
            <div>
                <label>Descrição</label>
                <input

                    type="text"
                    placeholder='Informações adicionais'
                    onChange={(e) => setDescription(e.target.value)}
                // value={description}
                />
            </div>
            <div>
                <label>Valor R$</label>
                <input
                    type="number"
                    min={0}
                    placeholder='informe o preço do produto'
                    onChange={(e) => setPrice(e.target.value)}
                // value={price}
                />
            </div>
            <button type="submit">Confirmar</button>
        </form>
    </div>
}