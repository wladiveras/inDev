import { jsPDF } from 'jspdf'

export const usePDF = () => {
    const generatePDFWithHTML = async () => {
        const doc = new jsPDF()

        // Add HTML content
        const element = document.getElementById('content-to-pdf')
        if (element) {
            await doc.html(element, {
                callback: (doc) => {
                    doc.save('document.pdf')
                },
                x: 10,
                y: 10
            })
        }
    }

    const generatePDFWithCustomization = () => {
        const doc = new jsPDF()

        // Set properties
        doc.setFontSize(16)
        doc.setTextColor(0, 0, 255) // Blue text

        // Add content
        doc.text('Custom styled text', 10, 10)

        // Add images
        // const imgData = 'base64 string of image'
        // doc.addImage(imgData, 'JPEG', 10, 20, 50, 50)

        // Save
        doc.save('custom-document.pdf')
    }

    return {
        generatePDFWithHTML,
        generatePDFWithCustomization
    }
}
