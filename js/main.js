console.log("App is running...");

// Opdracht 1

// Opdracht 2

// Opdracht 3

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
                <h5 class="card-title">Zet hier je title</h5>
                <p class="card-text">Zet hier je beschrijving</p>
                <span><strong>Zet hier je prijs</strong></span>
            </div>
        </div>
    </div>
    `;

	return card;
}
