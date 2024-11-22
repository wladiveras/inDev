export const downloadResume = () => {
    const pdfPath = '/resume.pdf'
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = 'resume.pdf'
    link.click()
}
