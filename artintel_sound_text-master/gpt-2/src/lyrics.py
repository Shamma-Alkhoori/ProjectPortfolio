import pandas as pd

data = pd.read_csv("lyrics-data.csv")
lyrics = list(data["Lyric"])
file = open("finetune_generated.txt", "w")
file.write("\n".join(lyrics[:200]))
file.close()