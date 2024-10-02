document.addEventListener('DOMContentLoaded', function() {
    var popupOpen = false;

    function openPopup() {
        Swal.fire({
            title: "This Website is Obsolete",
            icon: "info",
            iconColor: "#FFC107",
            html: `<br>This website is outdated and has been archived.<br>It no longer reflects the current activities<br>or updates of its owner.`,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `I Understand`,
            cancelButtonText: `Visit Current Website <i class="fa fa-external-link"></i>`,
            footer: 'Another website design by Mohd Fitri Zulkaffli',
            confirmButtonColor: "#2A52BE",
            cancelButtonColor: "#24252B",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                popupOpen = false;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.open("https://fitri.my/", "noopener,noreferrer");
            }
        });
        popupOpen = true;
    }
    window.addEventListener('blur', function() {
        if (popupOpen) {
            Swal.close();
        }
    });
    window.addEventListener('focus', function() {
        if (popupOpen) {
            openPopup();
        }
    });
    openPopup();
});