let storiesCreated = 0;
$("button").click(function () {
    storiesCreated = storiesCreated+1;
    let name = $(".name-input").val();
    let tran = $(".transport-input").val();
    let adj = $(".adjective-input").val();
    let num = $(".number-input").val();

    console.log(name);
    console.log(tran);
    console.log(adj);
    console.log(num);
    console.log(storiesCreated);

    $(".story").append("One day my friend " + name + " and I decided to take a trip to the beach, so we packed our bags and took the " + tran + " over. It was a " + adj + " day a the beach! We ended up staying " + num + " hours!");
});