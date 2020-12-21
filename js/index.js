$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 1000
    });


    $('#contacto').on('show.bs.modal', function (e){
        console.log("El modal contacto se está mostrando");
        $('#contactoJQ').removeClass('btn-danger');
        $('#contactoJQ').addClass('btn-primary');
        $('#contactoJQ').prop('disabled', true);
    });

    $('#contacto').on('shown.bs.modal', function (e){
        console.log("El modal contacto se mostró");
    });

    $('#contacto').on('hide.bs.modal', function (e){
        console.log("El modal contacto se oculta");
    });

    $('#contacto').on('hidden.bs.modal', function (e){
        console.log("El modal contacto se ocultó");
    });
});