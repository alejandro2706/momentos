import Swal from 'sweetalert2'

const SwalWithNoButton = Swal.mixin({
  toast: false,
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

const Toast = Swal.mixin({
  toast: true,
  timer: 1500,
  timerProgressBar: true,
  showConfirmButton: false,
})

const SwalWithBtn = Swal.mixin({
  toast: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

export { SwalWithBtn, SwalWithNoButton, Toast }
