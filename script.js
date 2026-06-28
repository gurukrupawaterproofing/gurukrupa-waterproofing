document.getElementById("inquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let whatsappMessage =
`📩 *New Inquiry - Gurukrupa Waterproofing*

👤 Name: ${name}
📞 Mobile: ${phone}
📝 Message: ${message}`;

    // Tumhara WhatsApp Number
    let whatsappNumber = "918600451084";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
    );

    this.reset();
});