import sys
import pandas as pd

if __name__ == "__main__":
    index = sys.argv[1]
    df = pd.read_csv("data.csv")
    data = list(df["data"])
    print(data[int(index)])

