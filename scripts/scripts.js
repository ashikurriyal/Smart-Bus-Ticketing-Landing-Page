/* Select Seat and Make it Green */

const seats = document.querySelectorAll(".select-seat");
const maxSeats = 4;
const availableSeat = 40;

let totalSeatFare = 0;

let selectedSeats = 0;

for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (selectedSeats < maxSeats && !seat.classList.contains("selected")) {
      seat.classList.add("selected");
      seat.style.backgroundColor = "#32CD32";
      seat.style.color = "white";
      selectedSeats++;

      let seatName = seat.innerText;
      const seatType = "Economy";
      const seatFare = 550;

      totalSeatFare = seatFare;

      if (selectedSeats == 1) {
        document
          .getElementById("seat-details1")
          .querySelector(".seat-name").innerText = seatName;
        document
          .getElementById("seat-details1")
          .querySelector(".seat-type").innerText = seatType;
        document
          .getElementById("seat-details1")
          .querySelector(".seat-fare").innerText = seatFare;

        document.getElementById("total-price").innerText = totalSeatFare;
        document.getElementById("grand-total").innerText = totalSeatFare;
      } else if (selectedSeats == 2) {
        document
          .getElementById("seat-details2")
          .querySelector(".seat-name").innerText = seatName;
        document
          .getElementById("seat-details2")
          .querySelector(".seat-type").innerText = seatType;
        document
          .getElementById("seat-details2")
          .querySelector(".seat-fare").innerText = seatFare;
        document.getElementById("total-price").innerText = totalSeatFare * 2;
        document.getElementById("grand-total").innerText = totalSeatFare * 2;
      } else if (selectedSeats == 3) {
        document
          .getElementById("seat-details3")
          .querySelector(".seat-name").innerText = seatName;
        document
          .getElementById("seat-details3")
          .querySelector(".seat-type").innerText = seatType;
        document
          .getElementById("seat-details3")
          .querySelector(".seat-fare").innerText = seatFare;
        document.getElementById("total-price").innerText = totalSeatFare * 3;
        document.getElementById("grand-total").innerText = totalSeatFare * 3;
      } else if (selectedSeats == 4) {
        document
          .getElementById("seat-details4")
          .querySelector(".seat-name").innerText = seatName;
        document
          .getElementById("seat-details4")
          .querySelector(".seat-type").innerText = seatType;
        document
          .getElementById("seat-details4")
          .querySelector(".seat-fare").innerText = seatFare;
        document.getElementById("total-price").innerText = totalSeatFare * 4;
        document.getElementById("grand-total").innerText = totalSeatFare * 4;
      }
    
      
      let couponInputField = document.getElementById('coupon-input')
      let grandTotal = document.getElementById('grand-total').innerText
      
      document.getElementById('coupon-apply').addEventListener("click", function(){
          if(couponInputField.value === 'NEW15'){
            grandTotal = parseInt(grandTotal*0.85)
            document.getElementById('grand-total').innerText = grandTotal
          }
          else if(couponInputField.value === 'Couple 20'){
            grandTotal = parseInt(grandTotal*0.80)
            document.getElementById('grand-total').innerText = grandTotal
          }
      })
    }
    updateSeatCount();
  });
}

function updateSeatCount() {
  const selectedCount = document.querySelectorAll(".selected").length;
  const availableCount = availableSeat - selectedCount;

  document.getElementById("selected-seat").textContent = selectedCount;
  document.getElementById("available-seat").textContent = availableCount;
}



/* let couponApplyButton = document.getElementById('coupon-apply')
let couponInputField = document.getElementById('coupon-input')
let grandTotal = document.getElementById('grand-total').innerText

document.getElementById('coupon-apply').addEventListener("click", function(){
    if(couponInputField.value === 'NEW15'){
        grandTotal = grandTotal*0.15
        document.getElementById('grand-total').innerText = grandTotal
    }
    else if(couponInputField.value === 'Couple 20'){
        grandTotal = grandTotal*0.20
    }
}) */
console.log(totalSeatFare)