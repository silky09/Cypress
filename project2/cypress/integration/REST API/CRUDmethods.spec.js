/// <reference types = 'cypress' />
/// use 'request' method 

describe('REST_API testing: CRUD methods', function() {

    it('GET: get api user test', function() {

        cy.request({
            method: 'GET',
            url: 'http://httpbin.org/get',
            headers: {
                "Accept-Encoding": "gzip, deflate"
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    
    })

    it('POST: post request', function() {

        cy.request({
            method: 'POST',
            url: 'http://httpbin.org/post',
            body:{
              'name': 'Silk',
              'age': 34  
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
            expect(response.body.json).to.deep.equal({
                "name": "Silk",
              "age": 34
            })
        })

        
    
    })
    it("PATCH", () => {
        // in one line of code
        cy.request("PATCH", "https://httpbin.org/patch", {'name': 'Silk'})
          .then((res) => {
            expect(res.body).have.property('json')
            expect(res.body.json).to.deep.equal({
                "name": "Silk"
            })
        })
    })

    
})