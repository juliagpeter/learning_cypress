describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYzBkZTRjMS1hOTZjLTQyNmItYjUxNC1hNzAwOWQxZGMwNjQiLCJhZG9wdGVyTmFtZSI6IkrDumxpYSIsImlhdCI6MTczMjU2NTY3NywiZXhwIjoxNzMyODI0ODc3fQ.bgFjcZ6sQdC4dHmAGvs1Z3bq7Ml51P7PanKEoKLaqsA`

    it('Deve retornar a lista de mensagens', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/ec0de4c1-a96c-426b-b514-a7009d1dc064',
            headers: {
                authorization
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body).to.have.property('msg')
            })
        })
})