import csv

csvfile = 'Data/j.csv' # Path to csv file

PyDict = {} # Empty Dictionary

with open(csvfile) as file: 
    reader = csv.DictReader(file)
    for row in reader:
        PyDict[row['Word']] = float(row['I_Zscore']) # Read file row by row and add new keys (words) and values (I_Zscore) to dictionary
    

print(PyDict['zooms']) # Get I_Zscore for each word by using it as a key
