    document.addEventListener("DOMContentLoaded", () => {
        const menuItems = document.querySelectorAll(".nav-link");
    
        menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            // Hapus kelas aktif dari semua menu
            menuItems.forEach((menu) => menu.classList.remove("active"));
    
            // Tambahkan kelas aktif ke menu yang diklik
            e.target.classList.add("active");
        });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        function calculateTrig() {
            const angleInput = parseFloat(document.getElementById('angle').value);
        
            if (isNaN(angleInput)) {
                const fields = ['sin-result', 'cos-result', 'tan-result', 'cot-result', 'sec-result', 'csc-result'];
                fields.forEach(id => document.getElementById(id).innerHTML = "");
                return;
            }
        
            // Reduksi sudut ke dalam rentang 0°-360°
            const angle = angleInput % 360;
            const angleInRadians = angle * (Math.PI / 180);
        
            // Nilai trigonometri dasar
            const sinValue = Math.sin(angleInRadians);
            const cosValue = Math.cos(angleInRadians);
            const tanValue = Math.tan(angleInRadians);
            const cotValue = 1 / tanValue;
            const secValue = 1 / cosValue;
            const cscValue = 1 / sinValue;
        
            // Nilai untuk sudut yang dikenal
            const knownValues = {
    0: { sin: "0", cos: "1", tan: "0", cot: "Undefined", sec: "1", csc: "Undefined" },
    30: { sin: "1/2", cos: "√3/2", tan: "1/√3", cot: "√3", sec: "2/√3", csc: "2" },
    45: { sin: "√2/2", cos: "√2/2", tan: "1", cot: "1", sec: "√2", csc: "√2" },
    60: { sin: "√3/2", cos: "1/2", tan: "√3", cot: "1/√3", sec: "2", csc: "2/√3" },
    90: { sin: "1", cos: "0", tan: "Undefined", cot: "0", sec: "Undefined", csc: "1" },
    120: { sin: "√3/2", cos: "-1/2", tan: "-√3", cot: "-1/√3", sec: "-2", csc: "-2/√3" },
    135: { sin: "√2/2", cos: "-√2/2", tan: "-1", cot: "-1", sec: "-√2", csc: "-√2" },
    150: { sin: "1/2", cos: "-√3/2", tan: "-1/√3", cot: "-√3", sec: "-2/√3", csc: "-2" },
    180: { sin: "0", cos: "-1", tan: "0", cot: "Undefined", sec: "Undefined", csc: "-1" },
    210: { sin: "-1/2", cos: "-√3/2", tan: "1/√3", cot: "√3", sec: "-2/√3", csc: "-2" },
    225: { sin: "-√2/2", cos: "-√2/2", tan: "1", cot: "1", sec: "-√2", csc: "-√2" },
    240: { sin: "-√3/2", cos: "-1/2", tan: "-√3", cot: "-1/√3", sec: "-2", csc: "-2/√3" },
    270: { sin: "-1", cos: "0", tan: "Undefined", cot: "0", sec: "Undefined", csc: "-1" },
    300: { sin: "-√3/2", cos: "1/2", tan: "-√3", cot: "-1/√3", sec: "2", csc: "2/√3" },
    315: { sin: "-√2/2", cos: "√2/2", tan: "-1", cot: "-1", sec: "√2", csc: "-√2" },
    330: { sin: "-1/2", cos: "√3/2", tan: "-1/√3", cot: "-√3", sec: "2/√3", csc: "-2" },
    360: { sin: "0", cos: "1", tan: "0", cot: "Undefined", sec: "1", csc: "Undefined" },
};
        
            const results = knownValues[angle];
        
            // Menampilkan hasil
            if (results) {
                document.getElementById('sin-result').innerHTML = `sin(${angleInput}°) = ${results.sin}`;
                document.getElementById('cos-result').innerHTML = `cos(${angleInput}°) = ${results.cos}`;
                document.getElementById('tan-result').innerHTML = `tan(${angleInput}°) = ${results.tan}`;
                document.getElementById('cot-result').innerHTML = `cot(${angleInput}°) = ${results.cot}`;
                document.getElementById('sec-result').innerHTML = `sec(${angleInput}°) = ${results.sec}`;
                document.getElementById('csc-result').innerHTML = `csc(${angleInput}°) = ${results.csc}`;
            } else {
                document.getElementById('sin-result').innerHTML = `sin(${angleInput}°) = ${formatResult(sinValue)}`;
                document.getElementById('cos-result').innerHTML = `cos(${angleInput}°) = ${formatResult(cosValue)}`;
                document.getElementById('tan-result').innerHTML = `tan(${angleInput}°) = ${formatResult(tanValue)}`;
                document.getElementById('cot-result').innerHTML = `cot(${angleInput}°) = ${formatResult(cotValue)}`;
                document.getElementById('sec-result').innerHTML = `sec(${angleInput}°) = ${formatResult(secValue)}`;
                document.getElementById('csc-result').innerHTML = `csc(${angleInput}°) = ${formatResult(cscValue)}`;
            }
        }
    
        document.getElementById('angle').addEventListener('input', calculateTrig);
    });

    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton1 = document.getElementById('toggleCalculatorBtn');
        const calculatorDiv = document.querySelector('.calculator');
    
        // Periksa apakah elemen ditemukan
        if (toggleButton1 && calculatorDiv) {
            toggleButton1.addEventListener('click', () => {
                // Toggle display
                console.log("Button clicked");
                if (calculatorDiv.style.display === 'none' || !calculatorDiv.style.display) {
                    calculatorDiv.style.display = 'block';
                } else {
                    calculatorDiv.style.display = 'none';
                }
            });
        }
    });


    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton1 = document.getElementById('toggleCalculatorBtn');
        const calculatorDiv = document.querySelector('.calculator');
        console.log("Calculator Div:", calculatorDiv);
        
        // Fungsi untuk toggle (menyembunyikan/memunculkan) div calculator
        toggleButton1.addEventListener('click', function() {
            console.log("Button clicked");
        // Jika kalkulator terlihat, sembunyikan; jika tidak, tampilkan
        console.log("Current display style:", calculatorDiv.style.display);
        if (calculatorDiv.style.display === "none" || !calculatorDiv.style.display) {
            calculatorDiv.style.display = "block";
        } else {
            calculatorDiv.style.display = "none";
        }
        });
    });  

    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton1 = document.getElementById('toggleCalculatorBtn');
        const toggleButton2 = document.getElementById('toggleCalculatorBtn2');
        const calculatorDiv = document.querySelector('.calculator');
        const icon = toggleButton1.querySelector("i"); // Ikon di dalam tombol
    
        // Pastikan elemen ditemukan sebelum melanjutkan
        if (toggleButton1 && calculatorDiv && icon) {
            toggleButton1.addEventListener("click", () => {
                console.log("Button clicked");
                console.log("Current display style:", calculatorDiv.style.display);
    
                // Toggle visibilitas elemen calculator
                if (calculatorDiv.style.display === "none" || !calculatorDiv.style.display) {
                    calculatorDiv.style.display = "block"; // Tampilkan kalkulator
                    icon.classList.remove("bi-chevron-up"); // Ganti ikon ke atas
                    icon.classList.add("bi-chevron-down");
                } else {
                    calculatorDiv.style.display = "none"; // Sembunyikan kalkulator
                    icon.classList.remove("bi-chevron-down"); // Ganti ikon ke bawah
                    icon.classList.add("bi-chevron-up");
                }
    
                console.log("New display style:", calculatorDiv.style.display);
            });
        } else {
            console.error("Toggle button or calculator div or icon not found");
        }
    });

    const toggleButton1 = document.querySelector('.btn-toggle');

    // Tambahkan event listener ke tombol
    toggleButton1.addEventListener('click', function () {
        // Toggle status aktif pada tombol
        toggleButton1.classList.toggle('active');
    
        // Toggle tampilan tersembunyi untuk calculator pertama
        const calculator1 = document.querySelector('.calculator');
        calculator1.classList.toggle('calculator-hidden');
    
        // Toggle tampilan tersembunyi untuk calculator kedua
        const calculator2 = document.querySelector('.calculator2');
        calculator2.classList.toggle('calculator2-hidden');
    });
    

    function formatResult(value) {
        if (!isFinite(value)) {
            return "Undefined";
        }
        if (Math.abs(value) === 1 || Math.abs(value) === 0) {
            return value.toString();
        }
        // Format nilai ke pecahan jika memungkinkan
        const fraction = approximateFraction(value);
        return fraction ? fraction : value.toFixed(4);
    }
    
    function approximateFraction(value) {
        const denominators = [1, 2, 3, 4, 6];
        const tolerance = 1e-10;
        for (let denom of denominators) {
            const num = Math.round(value * denom);
            if (Math.abs(value - num / denom) < tolerance) {
                return `${num}/${denom}`;
            }
        }
        return null;
    }

    const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Cek apakah mode gelap disimpan di localStorage
if (localStorage.getItem('mode') === 'night') {
    body.classList.add('night-mode');
    modeToggle.querySelector('i').classList.add('bi-moon');
} else {
    body.classList.remove('night-mode');
    modeToggle.querySelector('i').classList.add('bi-brightness-high');
}

// Menambahkan event listener pada tombol
modeToggle.addEventListener('click', () => {
    // Toggle class night-mode di body
    body.classList.toggle('night-mode');

    // Simpan status mode di localStorage
    if (body.classList.contains('night-mode')) {
        localStorage.setItem('mode', 'night');
        modeToggle.querySelector('i').classList.remove('bi-brightness-high');
        modeToggle.querySelector('i').classList.add('bi-moon');
    } else {
        localStorage.setItem('mode', 'day');
        modeToggle.querySelector('i').classList.remove('bi-moon');
        modeToggle.querySelector('i').classList.add('bi-brightness-high');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn1 = document.getElementById("toggleCalculatorBtn");
    const toggleBtn2 = document.getElementById("toggleCalculatorBtn2");
    const calculator1 = document.querySelector(".calculator");
    const calculator2 = document.querySelector(".calculator2");

    function toggleVisibility(button, calculator) {
        const isVisible = calculator.style.display === "block";
        calculator.style.display = isVisible ? "none" : "block";

        // Toggle ikon tombol
        const icon = button.querySelector("i");
        if (icon) {
            icon.classList.toggle("bi-chevron-down", !isVisible);
            icon.classList.toggle("bi-chevron-up", isVisible);
        }
    }

    // Event listener untuk tombol pertama
    if (toggleBtn1 && calculator1) {
        toggleBtn1.addEventListener("click", function () {
            toggleVisibility(toggleBtn1, calculator1);
        });
    }

    // Event listener untuk tombol kedua
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate exponent and display the solution
    function calculateExponent() {
      // Get the base and exponent values from the inputs
      const base = parseFloat(document.getElementById('sidea').value);
      const exponent = parseFloat(document.getElementById('sideb').value);
      
      // Check if the inputs are valid
      if (isNaN(base) || isNaN(exponent)) {
        document.getElementById('answer').innerHTML = 'Please enter valid numbers.';
        document.getElementById('solution').innerHTML = '';
        return;
      }
  
      // Calculate the result of base raised to the power of exponent
      const result = Math.pow(base, exponent);
  
      // Display the answer
      document.getElementById('answer').innerHTML = `Answer: ${result}`;
  
      // Display the solution steps
      document.getElementById('solution').innerHTML = `
        <strong>Solution:</strong><br>
        (${base})<sup>${exponent}</sup> = ${base} <sup>${exponent}</sup><br>
        = ${base} × ${base} × ... (repeated ${exponent} times)<br>
        = ${result}
      `;
    }
  
    // Listen for changes in the inputs and call the calculateExponent function
    document.getElementById('sidea').addEventListener('input', calculateExponent);
    document.getElementById('sideb').addEventListener('input', calculateExponent);
  });

  function toggleElementVisibility(button, element) {
    // Periksa apakah elemen ditemukan
    if (!button || !element) return;

    // Toggle visibilitas elemen
    const isVisible = element.style.display === "block";
    element.style.display = isVisible ? "none" : "block";

    // Toggle ikon pada tombol (jika ada ikon)
    const icon = button.querySelector("i");
    if (icon) {
        icon.classList.toggle("bi-chevron-down", !isVisible);
        icon.classList.toggle("bi-chevron-up", isVisible);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = [
        { buttonId: "toggleCalculatorBtn", elementClass: ".calculator" },
        { buttonId: "toggleCalculatorBtn2", elementClass: ".calculator2" },
        // Tambahkan pasangan button-element lainnya jika diperlukan
    ];

    toggleButtons.forEach(({ buttonId, elementClass }) => {
        const button = document.getElementById(buttonId);
        const element = document.querySelector(elementClass);

        if (button && element) {
            button.addEventListener("click", function () {
                toggleElementVisibility(button, element);
            });
        }
    });
});  

