console.log("App is running...");

// Opdracht 1
const persons = [
	{
		firstName: "Donald",
		lastName: "Duck",
		hobby: "Kwekken",
	},
	{
		firstName: "Dagobert",
		lastName: "Duck",
		hobby: "Geld verdienen",
	},
];

for (let a = 0; a < persons.length; a++) {
	const p = persons[a];
	console.log(p);
}

// Opdracht 2
const autos = [
	{
		brand: "Volkswagen",
		model: "Polo",
		construction: 2003,
		age: function () {
			console.log("Brand is: ", this.brand);
			console.log("Age is: ", 2023 - this.construction);
		},
	},
	{
		brand: "Porche",
		model: "Panamera",
		construction: 2018,
		age: function () {
			console.log("Brand is: ", this.brand);
			console.log("Age is: ", 2023 - this.construction);
		},
	},
];

for (let x = 0; x < autos.length; x++) {
	const auto = autos[x];
	auto.age();
}

// Opdracht 3
function createStudent(firstName, className, course) {
	const student = {
		firstName: firstName,
		className: className,
		course: course,
	};

	return student;
}

const students = [];

let student = createStudent("Juwara", "1L", "SD");
students.push(student);

student = createStudent("Dani", "1J", "SD");
students.push(student);

student = createStudent("Ali", "1N", "SD");
students.push(student);

for (let i = 0; i < students.length; i++) {
	const e = students[i];
	console.log(e);
}

// Opdracht 4
const data = `
    [
        {
            "title": "Purina One",
            "description": "Per zak 800 gr.",
            "price": 3.49
        },
        {
            "title": "Glorix reinigingsdoekjes",
            "description": "30 stuks",
            "price": 0.69
        },
        {
            "title": "Silan wasverzachter",
            "description": "Per flacon 37 wasbeurten",
            "price": 2.19
        }
    ]
`;

const products = JSON.parse(data);
// console.log(data);
// console.log(products);
for (let i = 0; i < products.length; i++) {
	const product = products[i];
	console.log(product);
}

// Opdracht 5

// In de container komen de cards in te staan
const container = document.querySelector(".row");

// Deze functie maakt card html aan, maar moet
// nog aangepast worden om object informatie over te nemen
function createCard(object) {
	const card = `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${object.title}</h5>
                <p class="card-text">${object.description}</p>
                <span><strong>${object.price}</strong></span>
            </div>
        </div>
    </div>
    `;

	return card;
}

for (let i = 0; i < products.length; i++) {
	const product = products[i];
	const card = createCard(product);

	container.innerHTML += card;
}
