
function Teams(){

    const team1 = "Kirena and Steven";
    const team2 = "Casper and Aidan";
    const team3 = "Jane and Gregory";
    const team4 = "Rohan and Allison";

    return(
        <ol>
            <li>{team1}</li>
            <li>{team2}</li>
            <li>{team3}</li>
            <li>{team4.toLowerCase()}</li>
        </ol>
    );
}

export default Teams