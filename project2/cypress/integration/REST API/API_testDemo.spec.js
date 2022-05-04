

describe('Api_test', () => { 

    it('GET: get request', () => {
        cy.request({
            method: 'GET',
            url: 'https://flask-rest-api-demo.herokuapp.com/users'
        }).then((r)=>{
            expect(r.status).eq(200)
            expect(r.body.users[1]).has.property('username')
            expect(r.headers).has.property('server')
            expect(r.body.users).has.length(5)
            expect(r.headers).not.has.property('age')
        })
    });




    it('POST: post request', () => {
       cy.request({
           method : 'POST',
           url: 'https://flask-rest-api-demo.herokuapp.com/product/motorbike',
          body: {
            'name': 'Silk',
            'age': 34 
          },
          headers: {
            'Content-Type': 'application/json'
        }
       })
       .then((response) => {
            expect(response.status).eq(200)
            expect(response.body).to.deep.equal(
                {
                    message: 'Product already in database!'
                })

            expect(response.headers).has.property('date')
       })
    });
 })