import zipfile
import xml.etree.ElementTree as ET
import sys
import os

# Namespace map for docx xml
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

def get_docx_text(path):
    print(f"Reading file: {path}")
    try:
        if not zipfile.is_zipfile(path):
            return "Error: File is not a valid zip file (docx is a zip format)"

        with zipfile.ZipFile(path) as docx:
            if 'word/document.xml' not in docx.namelist():
                return "Error: word/document.xml not found in package"

            xml_content = docx.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            text_lines = []
            for p in root.findall('.//w:p', ns):
                texts = [node.text for node in p.findall('.//w:t', ns) if node.text]
                if texts:
                    text_lines.append(''.join(texts))
            
            return '\n'.join(text_lines)
    except Exception as e:
        return f"Error reading docx: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py <docx_path>")
        sys.exit(1)
        
    path = sys.argv[1]
    if not os.path.exists(path):
        print(f"File not found: {path}")
        sys.exit(1)
        
    result = get_docx_text(path)
    print("--- EXTRACTED TEXT ---")
    print(result)
