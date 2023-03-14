const inventors = [
    { first : 'Albert', last : 'Einstein', year : 1879, passed : 1955},
    { first : 'Isaac', last : 'Newton', year : 1643, passed : 1727},
    { first : 'Galileo', last : 'Galilei', year : 1564, passed : 1642},
    { first : 'Marie', last : 'Curie', year : 1876, passed : 1934},
    { first : 'Johannes', last : 'Kepler', year : 1571, passed : 1630},
    { first : 'Nicolaus', last : 'Copernicus', year : 1473, passed : 1543},
    { first : 'Max', last : 'Planck', year : 1858, passed : 1947}
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel','Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel'
]

const fifteen = inventors.filter(inventor=>(inventor.year >= 1500) && (inventor.year < 1600))
console.log(fifteen)

const fullNames = inventors.map(inventor => inventor.first + '' + inventor.last)
console.log(fullNames)

const ordered = inventors.sort((a , b) => a.year > b.year ? 1 : -1)
console.log(ordered)

const totalYears = inventors.reduce((total , inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
console.log(totalYears)

const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year
    const nextGuy = b.passed - b.year
    return lastGuy > nextGuy ? -1 : 1    
})
console.table(oldest)

const category = document.querySelector('.mw-category')
const links = Array.from(category.querySelectorAll('a'))
const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'))
console.log(de)

const alpha = people.sort(function(lastOne , nextOne){
    const [alast, afirst] = lastOne.split(', ')
    const [blast, bfirst] = nextOne.split(', ')
    return alast > blast ? 1 : -1
})
console.log(alpha)

const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk','car','van','car','truck']
const transportation = data.reduce(function(obj,item){
    if(!obj[item]){
        obj[item]=0
    }
    obj[item]++
    return obj
} , {})
console.log(transportation)