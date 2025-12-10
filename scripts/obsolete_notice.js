document.addEventListener('DOMContentLoaded', function() {
    var popupOpen = false;

    function openPopup() {
        Swal.fire({
            title: "Archived Notice",
            icon: "info",
            iconColor: "#FFC107",
            html: `<br>You are viewing an archived project.<br>Content and design may be outdated and<br>is no longer affiliated with the original entity.`,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: `I Understand`,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            confirmButtonColor: "#660099",
            didOpen: () => {
                // Apply colors to title, html content, and footer
                const swalTitle = Swal.getTitle();
                const swalHtml = Swal.getHtmlContainer();
                const swalFooter = Swal.getFooter();

                if (swalTitle) swalTitle.style.color = "#09000E";
                if (swalHtml) swalHtml.style.color = "#09000E";
                if (swalFooter) swalFooter.style.color = "#09000E";
            }
        }).then((result) => {
            if (result.isConfirmed) {
                popupOpen = false;
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
