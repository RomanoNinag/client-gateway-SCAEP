import sys
import pandas as pd
import json
import io

def process_excel():
    # Leer el archivo desde stdin (recibido desde NestJS)
    file_content = sys.stdin.buffer.read()
    
    # Convertir el contenido a un DataFrame de Pandas
    df = pd.read_excel(io.BytesIO(file_content))

    df = df.where(pd.notna(df), None)
    # Transformar los datos
    data = {
        # "armas": df[['SERIE', 'TIPO', 'MARCA','MODELO','CALIBRE']].drop_duplicates().rename(columns={
        "armas": df[['SERIE' ,'CALIBRE']].drop_duplicates().rename(columns={
            'SERIE': 'serie',
            # 'TIPO': 'tipo',
            # 'MARCA': 'marca',
            # 'MODELO': 'modelo',
            'CALIBRE': 'calibre'
        }).to_dict(orient="records"),
        
        # "oficiales": df[['Oficial', 'Unidad']].drop_duplicates().rename(columns={
        #     'Oficial': 'nombre',
        #     'Unidad': 'unidad'
        # }).to_dict(orient="records"),

        "unidades": df[['DEPARTAMENTO', 'EPI O UNIDAD']].drop_duplicates().rename(columns={
            'DEPARTAMENTO': 'departamento',
            'EPI O UNIDAD': 'nombre_unidad'
        }).to_dict(orient="records"),

        "asignaciones": df[['SERIE', 'EPI O UNIDAD']].rename(columns={
            'SERIE': 'serie',
            'EPI O UNIDAD': 'nombre_unidad'
        }).to_dict(orient="records")
    }

    # Imprimir JSON para que NestJS lo reciba
    print(json.dumps(data))
    
if __name__ == "__main__":
    process_excel()
