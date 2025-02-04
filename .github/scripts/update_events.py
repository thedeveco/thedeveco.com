import requests
import yaml
import datetime

r = requests.get('https://discord.com/api/v10/guilds/620838168794497044/scheduled-events',
		headers={
			"Accept":"application/json",
			"Authorization":"Bot ${{ secrets.DISCORD_BOT_APIKEY }}"			
		}
	)

events = []

for e in r.json():
	name = e.get("name","")
	time = e.get("scheduled_start_time","")
	# time = datetime.datetime.fromisoformat(e.get("scheduled_start_time","")).strftime("%b %d, %Y")
	md = e.get("entity_metadata","")
	link = md.get("location","")
	description = e.get("description","")

	events.append(
		{
		"title":name,
		"date":time,
		"link":link,
		# "description":description,
		}
	)

# Sort events by date
events = sorted(events, key=lambda d: d['date'])

# Convert timestamps from iso format to human friendly format
for item in events:
	item['date'] = datetime.datetime.fromisoformat(item['date']).strftime("%B %d, %Y")

# Load data from yaml file
with open('data/home/events.yaml','r') as stream:
	data = yaml.safe_load(stream)

# Move old events from fruture to past
f = data['content']['future']
p = data['content']['past']

now = datetime.datetime.now()

for item in f:
	if now > datetime.datetime.strptime(item['date'],"%B %d, %Y"):
		p.append(item)

# Update Future events section
f = events

data['content']['future'] = f
data['content']['past'] = p

# Write data to file
with open('data/home/events.yaml','w') as outfile:
	yaml.dump(data, outfile, default_flow_style=False)