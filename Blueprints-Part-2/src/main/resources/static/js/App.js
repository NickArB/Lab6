var MiModulo = (function() {
    var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"}];

	mockdata["maryweyland"]=[{author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}];

	 mockdata["kyleResee"]=	[{author:"kyleResee","points":[{"x":3,"y":40},{"x":130,"y":90},{"x":140,"y":140},{"x":150,"y":120}],"name":"Dahouse"},
	 {author:"kyleResee","points":[{"x":345,"y":241},{"x":19,"y":243},{"x":140,"y":140},{"x":150,"y":120}],"name":"DaGear"}];

	mockdata["johnny"]=[{author:"johnny","points":[{"x":115,"y":120},{"x":100,"y":190},{"x":345,"y":241},{"x":19,"y":243}],"name":"Dahouse2"},
	 {author:"johnny","points":[{"x":170,"y":146},{"x":107,"y":109},{"x":90,"y":72},{"x":57,"y":287}],"name":"DaGear2"}];

     mockdata["ace"]=[{author:"ace","points":[{"x":145,"y":120},{"x":201,"y":310},{"x":140,"y":140},{"x":115,"y":115}],"name":"Dahouse3"},
	 {author:"ace","points":[{"x":90,"y":72},{"x":57,"y":287},{"x":340,"y":240},{"x":15,"y":215}],"name":"DaGear3"}];

    // Variables privada
    var authorName;
    var blueprints = [];
    // blueprints.push({ bluprintName: "Tupla1", numberOfPoints: 10});
    // Función pública para obtener el valor de la variable privada
    function getAuthorName() {
        return authorName;
    }

    // Función pública para establecer el valor de la variable privada
    function setAuthorName(authorname) {
        authorName = authorname;
    }

    function getBlueprints(){
        getBlueprintsByAuthor();
    }

    function mapAuthorAndPoints(bp){
        var bpName = bp.name;
        var numberOfPoints = bp.points.length;
        return { bluprintName: bpName, numberOfPoints: numberOfPoints};
    }

    function mapToTable(){
        $(document).ready(function(){
            $(".add-row").click(function(){
                var name = $("#name").val();
                var email = $("#email").val();
                var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
                $("table tbody").append(markup);
            });
        });
    }


    // Retornar solo las funciones públicas que quieres exponer
    return {
        getAuthorName: getAuthorName,
        setAuthorName: setAuthorName
    };
})();