const options = {
    month: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Septemper',
        'October',
        'November',
        'December'
    ],
    
    location: [
        'New York',
        'Madrid',
        'London',
        'Rio de Janeiro',
        'Pionyang',
        'Rome',
        'Paris',
        'Mexico',
        'Buenos Aires',
        'Tokyo',
        'Moscow',
        "your grandmother's house",
        'the supermarket',
        'the Hospital',
        'Omaha'
    ],
    
    person: [
        'Scarlett Johansson',
        'Gal Gadot',
        'Keanu Reeves',
        'Johnny Depp',
        'The Weeknd',
        'Rosalía',
        'Dua Lipa',
        'Leo Messi',
        'Cristiano Ronaldo',
        'Kim Jong-un',
        'Will Smith',
        'your future wife',
        'Rihanna',
        'your future husband',
        'Edwin Lin',
        'Donald Trump',
        'Joe Biden',
        'Taylor Swift',
        'Travis Scott',
        'Drake',
        'BTS',
        'Billie Eilish',
        'Kanye West'
    ],

    verb: [
        'kill',
        'slap',
        'hug',
        'punch',
        'insult',
        'sing for',
        'argue with',
        'read a book to',
        'sleep with',
        'dance with',
        'bonked',
        'ate fondue off',
        'received extremely poor-quality oral sex from',
        'gave an unwanted sensual massage to',
        'invented Reddit with',
        'very ineffectually punched',
        'pretended to be',
        'ran away from a murderous horde with',
        'played Dungeons and Dragons with',
        'roundly insulted',
        'defenstrated',
        'played naked leapfrog with'
    ],

    person2: [
        'Scarlett Johansson',
        'Gal Gadot',
        'Keanu Reeves',
        'Johnny Depp',
        'The Weeknd',
        'Rosalía',
        'Dua Lipa',
        'Leo Messi',
        'Cristiano Ronaldo',
        'Kim Jong-un',
        'Will Smith',
        'your future wife',
        'Rihanna',
        'your future husband',
        'Edwin Lin',
        'Donald Trump',
        'Joe Biden',
        'Taylor Swift',
        'Travis Scott',
        'Drake',
        'BTS',
        'Billie Eilish',
        'Kanye West'
    ]
}

const mixedMessage = () => {
    let sentence = [];

    for(let prop in options){
        let randomIndex = Math.floor(Math.random() * options[prop].length);
        let choice = options[prop][randomIndex];
        let date = Math.floor(Math.random() * 30) + 1;
        let year = Math.floor(Math.random() * 10) + 2021;
        switch(prop){
            case 'month':
                sentence.push(`On ${choice} ${date}, ${year}, you will be in `);
                break
            case 'location':
                sentence.push(`${choice} and `);
                break
            case 'person':
                sentence.push(`${choice} will `);
                break
            case 'verb':
                sentence.push(`${choice} `);
                break
            case 'person2':
                sentence.push(`${choice}.`);
                break
        }
    }
    console.log(sentence.join(''));
}

mixedMessage();