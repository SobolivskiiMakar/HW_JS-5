// 1

const first = prompt("Введіть ваш напій").trim().toLocaleLowerCase()
switch (first) {
    case "кава": 
    alert('Кохве?')
    break
    case "чай": 
    alert("Зелений чи чорний?")
    break
    case "сік":
        alert("Прікольно")
        break
        default:
            alert("Такого напою немає в наявності:(")
} 


// 2

const day = prompt("введіть день тижня").trim().toLocaleLowerCase()
switch (day) {
    case "понеділок":
        alert("Робочий день")
        break
        case "вівторок":
            alert("Робочий день")
            break
            case "середа":
                alert("Робочий день")
                break
                case "четвер":
                    alert("Робочий день")
                    break
                    case "п'ятниця":
                    alert("Робочий день")
                    break
                    case "субота":
                    alert("Вихідний")
                    break
                    case "неділя":
                    alert("вихідний")
                    break
                    default:
                        alert("Такого дня тижня не існує")
}

// 3

const mounth = Number(prompt("введіть номер місяця").trim().toLocaleLowerCase())
if (mounth === 12 || mounth === 1 || mounth === 2) {
    alert("Зима")

} else if (mounth === 3 || mounth === 4 || mounth === 5) {
    alert("Весна")
} else if (mounth === 6 || mounth === 7 || mounth === 8) {
    alert("Літо")
} else if (mounth === 9 || mounth === 10 || mounth === 11) {
    alert("Осінь")
} else {
    alert("Такого місяця немає")
}


// 4

const color = prompt("Введіть колір світлофору").trim().toLocaleLowerCase()
switch (color) {
    case "червоний": 
    alert("стоп")
    break
    case "жовтий": 
    alert("чекати")
    break
    case "зелений": 
    alert("газз")
    break
    default:
        alert("У світлофора немає такого кольора")
}

// 5

const frst = Number(prompt("Введіть перше число"))
const scnd = Number(prompt("Введіть друге число"))
const thrd = prompt("Введіть математичний оператор").trim()
if (thrd === "+") {
    alert(frst + scnd)
} else if (thrd === "-") {
    alert(frst - scnd)
} else if (thrd === "*") {
    alert(frst * scnd)
} else if (thrd === "/") {
    alert(frst / scnd)
} else {
    alert("Такого оператора немає")
}