Swal.fire("SweetAlert2 is working!");
//alert("Alert del sistema operativo")

Swal.fire({
  title: "<strong>HTML <u>example</u></strong>",
  icon: "info",
  html: `
    You can use <b>bold text</b>,
    <a href="#">links</a>,
    and other HTML tags
  `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i>
  `,
  cancelButtonAriaLabel: "Thumbs down",
});

//let opcion = confirm("adfasdf")
