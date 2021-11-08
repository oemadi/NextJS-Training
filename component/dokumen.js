
import PDFViewer from 'pdf-viewer-reactjs'


const Dokumen = () => {
  return (
    <PDFViewer
      document={{
        url: 'dokumen/dokumen.pdf',
      }}
    />
  )
}

export default Dokumen