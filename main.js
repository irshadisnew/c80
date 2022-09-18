emptyarray = [];
    
function submit()
{
    var display = [];

    for (var j = 1; j <= 4; j++) 
    {
        var name = document.getElementById("s"+j).value;
        console.log(name);
        emptyarray.push(name);
    }

    console.log(emptyarray);

    var lengthemptyarray = emptyarray.length
    console.log(lengthemptyarray);

    for (var k = 0; k < lengthemptyarray; k++) 
    {
        display.push("<h4>NAME - "+ emptyarray[k] + "</h4>");
        console.log(display);
    }

    console.log(display);
    document.getElementById("d1").innerHTML = display;

    var remove_commas = display.join(" ");
    console.log(remove_commas);
    document.getElementById("d2").innerHTML = remove_commas;
document.getElementById("sb").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";                                                                                            ;

}

function sorting()
{
    emptyarray.sort();
    console.log(emptyarray);

    var displaysorting = [];

    var lengthemptyarray = emptyarray.length;
    console.log(lengthemptyarray);

    for (var k = 0; k < lengthemptyarray; k++) 
    {
        displaysorting.push("<h4>NAME - " + emptyarray[k] + "</h4>");
        console.log(displaysorting);
    }

    var remove_commas = displaysorting.join(" ");
    console.log(remove_commas);

    document.getElementById("d2").innerHTML = remove_commas;
}

