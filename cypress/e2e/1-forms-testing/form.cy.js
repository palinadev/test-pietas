describe ('Main functionality test', function(){

it.skip('Positive form test [T-01P]' , function(){

    cy.visit('https://pohrebbezobradu.testovaci-stranka.cz/');

    // Customer Form
    cy.get('#name').type('Antonina');
    cy.get('#surname').type('Sokolova');
    cy.get('#adress').type('U Křížku 992, pokoj č. 34, Križany, 463 53');
    cy.get('#relationship').type('Bratř'); 
    cy.get('#tel').type('720496543'); 
    cy.get('#email').type('animetianochka@gmail.com'); 


    // Deceased Form
    cy.get('#name2').type('Jiří'); 
    cy.get('#surname2').type('Houba'); 
    cy.get('#place2').type('Nové Město 1919/45, pokoj č. 234, Ledec Nad Sázavou, 584 01');

    cy.pause();

    // cy.get('#birtdate').type('01/01/1970');
    // cy.get('#deathdate').type('01/01/2020');  manual input

    cy.get('#place3').type('Nemocnice 3');
    cy.get('.btn').click();

    cy.contains('p', 'Děkujeme za odeslání formuláře').should('be.visible');

});


it.skip('Positive form test [T-02P]' , function(){

    cy.visit('https://pohrebbezobradu.testovaci-stranka.cz/');

    // Customer Form
    cy.get('#name').type('Antonina Barbora');
    cy.get('#surname').type("O'Sokolová");
    cy.get('#adress').type('U Křížku 992, pokoj č. 34, Križany, 463 53');
    cy.get('#relationship').type('Bratř'); 
    cy.get('#tel').type('720496543'); 
    cy.get('#email').type('animetianochka@gmail.com'); 


    // Deceased Form
    cy.get('#name2').type('Jiří'); 
    cy.get('#surname2').type('van Houba'); 
    cy.get('#place2').type('Nové Město 1919/45, pokoj č. 234, Ledec Nad Sázavou, 584 01');
    cy.get('#birtdate').type('1970-01-01');
    cy.get('#deathdate').type('2020-01-01');
    cy.get('#place3').type('Nemocnice 3');
    cy.get('.btn').click();

    cy.contains('p', 'Děkujeme za odeslání formuláře').should('be.visible');

  

});

it.skip('Negative form test [T-01N]' , function(){

    cy.visit('https://pohrebbezobradu.testovaci-stranka.cz/');

    // Customer Form

    cy.get('#name').type('Marie???!');
    cy.get('#surname').type("Hok!");
    cy.get('#adress').type('!@#$%^&*()');
    cy.get('#relationship').type('12345'); 
    cy.get('#tel').type('720496543'); 
    cy.get('#email').type('animetianochka@gmail.com'); 


    // Deceased Form

    cy.get('#name2').type('Jiří!!,'); 
    cy.get('#surname2').type('!Houba');
    cy.get('#place2').type('^&*()');
    cy.get('#birtdate').type('1970-12-12');
    cy.get('#deathdate').type('1960-01-01');
    cy.get('#place3').type('12345');
    cy.get('.btn').click();

    cy.contains('p', 'Děkujeme za odeslání formuláře').should('be.visible');

});


it.skip('Negative form test [T-02N]' , function(){

    cy.visit('https://pohrebbezobradu.testovaci-stranka.cz/');

    // Customer Form
    cy.get('#name').type('Marie???!');
    cy.get('#surname').type("Hok!");
    cy.get('#adress').type('!@#$%^&*()');
    cy.get('#relationship').type('!@#Syn'); 
    cy.get('#tel').type('720345678'); 
    cy.get('#email').type('animetianochka@gmail.com'); 


    // Deceased Form
    cy.get('#name2').type('𝘢𝘯𝘵𝘰𝘯𝘪𝘯𝘢𝘮𝘢𝘳𝘪𝘦!');
    cy.get('#surname2').type("Houba");
    cy.get('#place2').type('^&*()');
    cy.get('#birtdate').type('1970-10-12');
    cy.get('#deathdate').type('2020-01-01');
    cy.get('#place3').type('!@#$%');
    cy.get('.btn').click();

    cy.contains('p', 'Děkujeme za odeslání formuláře').should('be.visible');


});
});



   




