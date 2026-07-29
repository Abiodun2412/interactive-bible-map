import type { Event } from "@/types/event";

export const events: Event[] = [
    {
        id: "creation",
        title: "Creation",
        description:
            "God creates the heavens and the earth and establishes the created order.",
        periodId: "patriarchs",
        personIds: [],
        datePrecision: "unknown",
        references: [
            {
                book: "Genesis",
                chapter: 1,
            },
            {
                book: "Genesis",
                chapter: 2,
            },
        ],
    },
    {
        id: "call-of-abraham",
        title: "God calls Abraham",
        description:
            "God calls Abram to leave his country and go to the land that He will show him.",
        placeId: "haran",
        periodId: "patriarchs",
        personIds: ["abraham"],
        datePrecision: "approximate",
        references: [
            {
                book: "Genesis",
                chapter: 12,
                startVerse: 1,
                endVerse: 5,
            },
        ],
    },
    {
        id: "covenant-with-abraham",
        title: "God makes covenant promises to Abraham",
        description:
            "God promises Abraham descendants, land, and blessing.",
        placeId: "canaan",
        periodId: "patriarchs",
        personIds: ["abraham"],
        datePrecision: "approximate",
        references: [
            {
                book: "Genesis",
                chapter: 15,
            },
            {
                book: "Genesis",
                chapter: 17,
            },
        ],
    },
    {
        id: "birth-of-isaac",
        title: "Birth of Isaac",
        description:
            "Isaac is born to Abraham and Sarah according to God's promise.",
        placeId: "beersheba",
        periodId: "patriarchs",
        personIds: ["abraham", "isaac"],
        datePrecision: "approximate",
        references: [
            {
                book: "Genesis",
                chapter: 21,
                startVerse: 1,
                endVerse: 7,
            },
        ],
    },
    {
        id: "jacob-renamed-israel",
        title: "Jacob is named Israel",
        description:
            "Jacob wrestles through the night and receives the name Israel.",
        placeId: "peniel",
        periodId: "patriarchs",
        personIds: ["jacob"],
        datePrecision: "approximate",
        references: [
            {
                book: "Genesis",
                chapter: 32,
                startVerse: 22,
                endVerse: 32,
            },
        ],
    },
    {
        id: "joseph-taken-to-egypt",
        title: "Joseph is taken to Egypt",
        description:
            "Joseph is sold and taken into Egypt, where God later raises him to a position of authority.",
        placeId: "egypt",
        periodId: "patriarchs",
        personIds: ["joseph"],
        datePrecision: "approximate",
        references: [
            {
                book: "Genesis",
                chapter: 37,
            },
            {
                book: "Genesis",
                chapter: 39,
            },
        ],
    },
    {
        id: "jacob-family-enters-egypt",
        title: "Jacob's family settles in Egypt",
        description:
            "Jacob and his household come to Egypt during the famine and settle there.",
        placeId: "egypt",
        periodId: "patriarchs",
        personIds: ["jacob", "joseph"],
        datePrecision: "approximate",
        references: [
            {
                book: "Genesis",
                chapter: 46,
            },
            {
                book: "Genesis",
                chapter: 47,
            },
        ],
    },
    {
        id: "burning-bush",
        title: "God calls Moses at the burning bush",
        description:
            "God appears to Moses from the burning bush and calls him to return to Egypt and lead the Israelites out of bondage.",
        placeId: "mount-sinai",
        periodId: "exodus-wilderness",
        personIds: ["moses"],
        datePrecision: "approximate",
        references: [
            {
                book: "Exodus",
                chapter: 3,
            },
            {
                book: "Exodus",
                chapter: 4,
                startVerse: 1,
                endVerse: 17,
            },
        ],
    },
    {
        id: "passover",
        title: "The first Passover",
        description:
            "God instructs Israel to observe the Passover as He prepares to bring them out of Egypt.",
        placeId: "goshen",
        periodId: "exodus-wilderness",
        personIds: ["moses", "aaron"],
        datePrecision: "approximate",
        references: [
            {
                book: "Exodus",
                chapter: 12,
                startVerse: 1,
                endVerse: 32,
            },
        ],
    },
    {
        id: "exodus-from-egypt",
        title: "Israel leaves Egypt",
        description:
            "After generations in Egypt, the Israelites depart under the leadership of Moses as God delivers them from slavery.",
        placeId: "egypt",
        periodId: "exodus-wilderness",
        personIds: ["moses", "aaron"],
        datePrecision: "approximate",
        references: [
            {
                book: "Exodus",
                chapter: 12,
                startVerse: 31,
                endVerse: 42,
            },
        ],
    },
    {
        id: "crossing-of-the-sea",
        title: "God brings Israel through the sea",
        description:
            "God makes a way through the sea for Israel and delivers them from Pharaoh's pursuing army.",
        placeId: "red-sea-crossing",
        periodId: "exodus-wilderness",
        personIds: ["moses"],
        datePrecision: "approximate",
        references: [
            {
                book: "Exodus",
                chapter: 14,
            },
        ],
    },
    {
        id: "sinai-covenant",
        title: "God meets with Israel at Mount Sinai",
        description:
            "Israel comes to Mount Sinai, where God establishes His covenant with the nation and gives His commands through Moses.",
        placeId: "mount-sinai",
        periodId: "exodus-wilderness",
        personIds: ["moses", "aaron"],
        datePrecision: "approximate",
        references: [
            {
                book: "Exodus",
                chapter: 19,
            },
            {
                book: "Exodus",
                chapter: 20,
            },
        ],
    },
    {
        id: "twelve-spies",
        title: "The twelve spies explore Canaan",
        description:
            "At God's command, Moses sends twelve men to explore the land of Canaan. Joshua and Caleb trust that God will give Israel the land, while the other spies bring a report that causes the people to fear.",
        placeId: "kadesh-barnea",
        periodId: "exodus-wilderness",
        personIds: ["moses", "joshua", "caleb"],
        datePrecision: "approximate",
        references: [
            {
                book: "Numbers",
                chapter: 13,
            },
            {
                book: "Numbers",
                chapter: 14,
            },
        ],
    },
    {
        id: "moses-strikes-rock",
        title: "Moses strikes the rock at Meribah",
        description:
            "When the congregation has no water, God commands Moses to speak to the rock. Moses strikes it, and water comes out, but God tells Moses and Aaron that they will not bring the assembly into the land.",
        placeId: "kadesh-barnea",
        periodId: "exodus-wilderness",
        personIds: ["moses", "aaron"],
        datePrecision: "approximate",
        references: [
            {
                book: "Numbers",
                chapter: 20,
                startVerse: 1,
                endVerse: 13,
            },
        ],
    },
    {
        id: "israel-camps-moab",
        title: "Israel camps on the plains of Moab",
        description:
            "Israel reaches the plains of Moab beside the Jordan, opposite Jericho, as the nation prepares for entry into the Promised Land.",
        placeId: "plains-of-moab",
        periodId: "exodus-wilderness",
        personIds: ["moses"],
        datePrecision: "approximate",
        references: [
            {
                book: "Numbers",
                chapter: 22,
                startVerse: 1,
            },
        ],
    },
    {
        id: "moses-views-promised-land",
        title: "Moses views the Promised Land",
        description:
            "Moses goes up from the plains of Moab to Mount Nebo, where God shows him the land promised to Abraham, Isaac, and Jacob before Moses dies.",
        placeId: "mount-nebo",
        periodId: "exodus-wilderness",
        personIds: ["moses"],
        datePrecision: "approximate",
        references: [
            {
                book: "Deuteronomy",
                chapter: 34,
                startVerse: 1,
                endVerse: 8,
            },
        ],
    },
    {
        id: "joshua-succeeds-moses",
        title: "Joshua succeeds Moses",
        description:
            "After the death of Moses, God commissions Joshua to lead Israel across the Jordan and into the land He promised.",
        placeId: "plains-of-moab",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 1,
                startVerse: 1,
                endVerse: 9,
            },
        ],
    },
    {
        id: "crossing-jordan",
        title: "Israel crosses the Jordan",
        description:
            "God stops the waters of the Jordan as Israel crosses on dry ground under Joshua's leadership.",
        placeId: "jordan-crossing",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 3,
            },
        ],
    },
    {
        id: "gilgal-memorial",
        title: "Twelve stones set up at Gilgal",
        description:
            "Joshua sets up twelve stones taken from the Jordan as a memorial of God's bringing Israel across the river.",
        placeId: "gilgal",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 4,
                startVerse: 19,
                endVerse: 24,
            },
        ],
    },
    {
        id: "fall-of-jericho",
        title: "The fall of Jericho",
        description:
            "Israel marches around Jericho according to God's command, and the walls fall as the people enter the city.",
        placeId: "jericho",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 6,
            },
        ],
    },
    {
        id: "defeat-at-ai",
        title: "Israel is defeated at Ai",
        description:
            "Israel attacks Ai after Jericho but is defeated because of Achan's sin concerning the devoted things.",
        placeId: "ai",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 7,
            },
        ],
    },
    {
        id: "victory-at-ai",
        title: "Israel defeats Ai",
        description:
            "After dealing with the sin in the camp, Joshua leads Israel against Ai again and the city is taken.",
        placeId: "ai",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 8,
                startVerse: 1,
                endVerse: 29,
            },
        ],
    },
    {
        id: "covenant-renewal-ebal",
        title: "Joshua renews the covenant at Mount Ebal",
        description:
            "Joshua builds an altar to the Lord and reads the law before Israel between Mount Ebal and Mount Gerizim.",
        placeId: "mount-ebal",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 8,
                startVerse: 30,
                endVerse: 35,
            },
        ],
    },
    {
        id: "gibeonite-treaty",
        title: "Israel makes a treaty with the Gibeonites",
        description:
            "The Gibeonites deceive Israel into making a covenant with them by claiming to have come from a distant land.",
        placeId: "gibeon",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 9,
            },
        ],
    },
    {
        id: "battle-of-gibeon",
        title: "Israel defends Gibeon",
        description:
            "When a coalition of Amorite kings attacks Gibeon, Joshua leads Israel to defend the city and the Lord gives the enemy into Israel's hands.",
        placeId: "gibeon",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 1,
                endVerse: 11,
            },
        ],
    },
    {
        id: "sun-stands-still",
        title: "The sun stands still",
        description:
            "During the battle, Joshua speaks before the Lord and the day is prolonged while Israel continues the victory over its enemies.",
        placeId: "gibeon",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 12,
                endVerse: 14,
            },
        ],
    },
    {
        id: "five-kings-defeated",
        title: "The five Amorite kings are defeated",
        description:
            "The five kings flee and hide in a cave at Makkedah, where they are later brought out following Israel's victory.",
        placeId: "makkedah",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 16,
                endVerse: 27,
            },
        ],
    },
    {
        id: "southern-campaign",
        title: "Joshua's southern campaign",
        description:
            "Joshua leads Israel through a series of victories across southern Canaan, including Libnah, Lachish, Eglon, Hebron, and Debir.",
        placeId: "lachish",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 28,
                endVerse: 43,
            },
        ],
    },
    {
        id: "northern-coalition-gathers",
        title: "The northern kings gather against Israel",
        description:
            "Jabin king of Hazor gathers a large coalition of northern kings and their armies against Israel.",
        placeId: "hazor",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 1,
                endVerse: 5,
            },
        ],
    },
    {
        id: "battle-waters-merom",
        title: "Joshua defeats the northern coalition",
        description:
            "Joshua and Israel come suddenly against the gathered northern armies near the Waters of Merom, and the Lord gives them into Israel's hand.",
        placeId: "waters-of-merom",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 6,
                endVerse: 9,
            },
        ],
    },
    {
        id: "hazor-captured",
        title: "Hazor is captured",
        description:
            "Joshua turns back and captures Hazor, the leading city of the northern coalition.",
        placeId: "hazor",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 10,
                endVerse: 15,
            },
        ],
    },
    {
        id: "caleb-receives-hebron",
        title: "Caleb receives Hebron",
        description:
            "Caleb reminds Joshua that he faithfully followed the Lord when he was sent to explore the land. Joshua blesses him and Hebron is given to Caleb as his inheritance.",
        placeId: "hebron",
        periodId: "conquest",
        personIds: ["joshua", "caleb"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 14,
                startVerse: 6,
                endVerse: 15,
            },
        ],
    },
    {
        id: "tabernacle-at-shiloh",
        title: "The tabernacle is established at Shiloh",
        description:
            "The whole congregation of Israel assembles at Shiloh and sets up the tent of meeting there as the land is brought under Israel's control.",
        placeId: "shiloh",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 18,
                startVerse: 1,
            },
        ],
    },
    {
        id: "land-distributed-shiloh",
        title: "The remaining land is distributed",
        description:
            "Joshua casts lots before the Lord at Shiloh to distribute the remaining inheritance among the tribes of Israel.",
        placeId: "shiloh",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 18,
                startVerse: 2,
                endVerse: 10,
            },
        ],
    },
    {
        id: "joshua-receives-inheritance",
        title: "Joshua receives Timnath-serah",
        description:
            "After the tribal inheritances are distributed, Israel gives Joshua the city of Timnath-serah in the hill country of Ephraim.",
        placeId: "timnath-serah",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 19,
                startVerse: 49,
                endVerse: 50,
            },
        ],
    },
    {
        id: "covenant-renewal-shechem",
        title: "Joshua renews the covenant at Shechem",
        description:
            "Joshua gathers the tribes of Israel at Shechem, recounts God's faithfulness, calls the people to serve the Lord, and renews the covenant with them.",
        placeId: "shechem",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 24,
                startVerse: 1,
                endVerse: 28,
            },
        ],
    },
    {
        id: "death-of-joshua",
        title: "The death of Joshua",
        description:
            "Joshua son of Nun dies at the age of 110 and is buried in the territory of his inheritance at Timnath-serah.",
        placeId: "timnath-serah",
        periodId: "conquest",
        personIds: ["joshua"],
        datePrecision: "approximate",
        references: [
            {
                book: "Joshua",
                chapter: 24,
                startVerse: 29,
                endVerse: 31,
            },
        ],
    },
    {
        id: "deborah-calls-barak",
        title: "Deborah calls Barak",
        description:
            "Deborah summons Barak and gives him God's command to gather troops at Mount Tabor against Sisera's army.",
        placeId: "mount-tabor",
        periodId: "judges",
        personIds: ["deborah", "barak"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 4,
                startVerse: 4,
                endVerse: 10,
            },
        ],
    },
    {
        id: "sisera-defeated",
        title: "Sisera's army is defeated",
        description:
            "The Lord throws Sisera's forces into confusion before Barak, and the army is defeated near the Kishon River.",
        placeId: "kishon-river",
        periodId: "judges",
        personIds: ["deborah", "barak"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 4,
                startVerse: 12,
                endVerse: 16,
            },
        ],
    },
    {
        id: "gideon-called",
        title: "Gideon is called",
        description:
            "The angel of the Lord appears to Gideon at Ophrah and calls him to save Israel from Midian.",
        placeId: "ophrah",
        periodId: "judges",
        personIds: ["gideon"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 6,
                startVerse: 11,
                endVerse: 24,
            },
        ],
    },
    {
        id: "gideon-three-hundred",
        title: "Gideon's army is reduced to three hundred",
        description:
            "God reduces Gideon's army so that Israel will know the victory over Midian comes from Him.",
        placeId: "spring-harod",
        periodId: "judges",
        personIds: ["gideon"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 7,
                startVerse: 1,
                endVerse: 8,
            },
        ],
    },
    {
        id: "ehud-delivers-israel",
        title: "Ehud delivers Israel from Moab",
        description:
            "Ehud is raised up as a deliverer for Israel and leads the people in victory over Moab.",
        placeId: "jericho",
        periodId: "judges",
        personIds: ["ehud"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 3,
                startVerse: 12,
                endVerse: 30,
            },
        ],
    },
    {
        id: "jephthah-leads-gilead",
        title: "Jephthah leads Gilead against Ammon",
        description:
            "Jephthah becomes leader of the people of Gilead and leads Israel in battle against the Ammonites.",
        placeId: "mizpah-gilead",
        periodId: "judges",
        personIds: ["jephthah"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 11,
                startVerse: 1,
                endVerse: 33,
            },
        ],
    },
    {
        id: "samson-born",
        title: "The birth of Samson is announced",
        description:
            "The angel of the Lord announces Samson's birth and that he will begin to deliver Israel from the Philistines.",
        placeId: "zorah",
        periodId: "judges",
        personIds: ["samson"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 13,
            },
        ],
    },
    {
        id: "samson-timnah",
        title: "Samson goes to Timnah",
        description:
            "Samson goes down to Timnah, beginning a series of events that bring him into conflict with the Philistines.",
        placeId: "timnah",
        periodId: "judges",
        personIds: ["samson"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 14,
            },
        ],
    },
    {
        id: "samson-gaza",
        title: "Samson's final act at Gaza",
        description:
            "After being captured by the Philistines, Samson calls on the Lord and brings down the temple where the Philistine rulers are gathered.",
        placeId: "gaza",
        periodId: "judges",
        personIds: ["samson"],
        datePrecision: "approximate",
        references: [
            {
                book: "Judges",
                chapter: 16,
                startVerse: 21,
                endVerse: 31,
            },
        ],
    },
    {
        id: "naomi-ruth-return-bethlehem",
        title: "Naomi and Ruth return to Bethlehem",
        description:
            "Naomi returns from Moab to Bethlehem after hearing that the Lord has provided food for His people, and Ruth remains faithfully with her.",
        placeId: "bethlehem",
        periodId: "judges",
        personIds: ["ruth", "naomi"],
        datePrecision: "approximate",
        references: [
            {
                book: "Ruth",
                chapter: 1,
                startVerse: 6,
                endVerse: 22,
            },
        ],
    },
    {
        id: "ruth-meets-boaz",
        title: "Ruth meets Boaz",
        description:
            "Ruth goes to glean in the fields and comes to the field belonging to Boaz, who shows her favour and protection.",
        placeId: "bethlehem",
        periodId: "judges",
        personIds: ["ruth", "boaz"],
        datePrecision: "approximate",
        references: [
            {
                book: "Ruth",
                chapter: 2,
            },
        ],
    },
    {
        id: "boaz-redeems-ruth",
        title: "Boaz acts as kinsman-redeemer",
        description:
            "Boaz fulfils the role of kinsman-redeemer and takes Ruth as his wife.",
        placeId: "bethlehem",
        periodId: "judges",
        personIds: ["ruth", "boaz", "naomi"],
        datePrecision: "approximate",
        references: [
            {
                book: "Ruth",
                chapter: 4,
                startVerse: 1,
                endVerse: 17,
            },
        ],
    },
    {
        id: "samuel-called",
        title: "God calls Samuel",
        description:
            "While Samuel serves before the Lord at Shiloh, God calls him and begins revealing His word through him.",
        placeId: "shiloh",
        periodId: "judges",
        personIds: ["samuel"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 3,
            },
        ],
    },
    {
        id: "samuel-judges-israel",
        title: "Samuel judges Israel",
        description:
            "Samuel leads Israel in repentance and serves as judge over the nation.",
        placeId: "ramah",
        periodId: "judges",
        personIds: ["samuel"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 7,
                startVerse: 15,
                endVerse: 17,
            },
        ],
    },
    {
        id: "israel-asks-for-king",
        title: "Israel asks for a king",
        description:
            "The elders of Israel come to Samuel and ask for a king to judge them like the surrounding nations.",
        placeId: "ramah",
        periodId: "judges",
        personIds: ["samuel"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 8,
            },
        ],
    },
    {
        id: "saul-anointed",
        title: "Samuel anoints Saul",
        description:
            "Samuel privately anoints Saul, declaring that the Lord has appointed him to lead His people.",
        placeId: "ramah",
        periodId: "judges",
        personIds: ["samuel", "saul"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 10,
                startVerse: 1,
            },
        ],
    },
    {
        id: "saul-chosen-at-mizpah",
        title: "Saul is publicly chosen as king",
        description:
            "Samuel gathers Israel at Mizpah, where Saul is publicly identified before the people as the man chosen to be king.",
        placeId: "mizpah-benjamin",
        periodId: "judges",
        personIds: ["samuel", "saul"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 10,
                startVerse: 17,
                endVerse: 24,
            },
        ],
    },
    {
        id: "saul-confirmed-king",
        title: "Saul's kingship is renewed at Gilgal",
        description:
            "After Saul leads Israel to victory, Samuel gathers the people at Gilgal, where Saul's kingship is renewed before the Lord.",
        placeId: "gilgal",
        periodId: "judges",
        personIds: ["samuel", "saul"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 11,
                startVerse: 14,
                endVerse: 15,
            },
        ],
    },
    {
        id: "saul-at-gibeah",
        title: "Saul establishes his leadership from Gibeah",
        description:
            "Saul's reign is closely associated with Gibeah, which becomes a major centre of his rule.",
        placeId: "gibeah",
        periodId: "judges",
        personIds: ["saul"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 13,
                startVerse: 2,
            },
        ],
    },
    {
        id: "david-anointed",
        title: "Samuel anoints David",
        description:
            "God sends Samuel to Bethlehem, where David is chosen and anointed in the presence of his brothers.",
        placeId: "bethlehem",
        periodId: "judges",
        personIds: ["samuel", "david"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 16,
                startVerse: 1,
                endVerse: 13,
            },
        ],
    },
    {
        id: "david-defeats-goliath",
        title: "David defeats Goliath",
        description:
            "David confronts Goliath in the Valley of Elah and defeats him, declaring that the battle belongs to the Lord.",
        placeId: "valley-of-elah",
        periodId: "judges",
        personIds: ["david", "goliath"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 17,
            },
        ],
    },
    {
        id: "david-jonathan-covenant",
        title: "David and Jonathan form a covenant",
        description:
            "Jonathan forms a covenant with David and remains loyal to him despite Saul's growing hostility.",
        placeId: "gibeah",
        periodId: "judges",
        personIds: ["david", "jonathan", "saul"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 18,
                startVerse: 1,
                endVerse: 4,
            },
        ],
    },
    {
        id: "saul-seeks-david",
        title: "Saul turns against David",
        description:
            "Saul becomes fearful and jealous of David and increasingly seeks to kill him.",
        placeId: "gibeah",
        periodId: "judges",
        personIds: ["saul", "david"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 18,
                startVerse: 6,
                endVerse: 30,
            },
        ],
    },
    {
        id: "david-visits-nob",
        title: "David visits Nob",
        description:
            "While fleeing from Saul, David comes to Ahimelech the priest at Nob and receives provisions and Goliath's sword.",
        placeId: "nob",
        periodId: "judges",
        personIds: ["david"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 21,
                startVerse: 1,
                endVerse: 9,
            },
        ],
    },
    {
        id: "david-at-adullam",
        title: "David gathers followers at Adullam",
        description:
            "David escapes to the cave of Adullam, where his family and many others join him.",
        placeId: "adullam",
        periodId: "judges",
        personIds: ["david"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 22,
                startVerse: 1,
                endVerse: 2,
            },
        ],
    },
    {
        id: "david-spares-saul",
        title: "David spares Saul at En Gedi",
        description:
            "David has an opportunity to kill Saul but refuses to harm the Lord's anointed.",
        placeId: "en-gedi",
        periodId: "judges",
        personIds: ["david", "saul"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 24,
            },
        ],
    },
    {
        id: "saul-dies-gilboa",
        title: "Saul dies on Mount Gilboa",
        description:
            "Saul and his sons fall in battle against the Philistines on Mount Gilboa, bringing Saul's reign to an end.",
        placeId: "mount-gilboa",
        periodId: "judges",
        personIds: ["saul", "jonathan"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 31,
            },
        ],
    },
    {
        id: "jabesh-retrieves-saul",
        title: "The men of Jabesh-gilead recover Saul's body",
        description:
            "The valiant men of Jabesh-gilead recover the bodies of Saul and his sons and give them burial.",
        placeId: "jabesh-gilead",
        periodId: "judges",
        personIds: ["saul", "jonathan"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Samuel",
                chapter: 31,
                startVerse: 11,
                endVerse: 13,
            },
        ],
    },
    {
        id: "david-becomes-king-hebron",
        title: "David becomes king over Judah",
        description:
            "David goes up to Hebron, where the men of Judah anoint him king over the house of Judah.",
        placeId: "hebron",
        periodId: "united-monarchy",
        personIds: ["david"],
        approximateDate: "c. 1010 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Samuel",
                chapter: 2,
                startVerse: 1,
                endVerse: 4,
            },
        ],
    },
    {
        id: "david-king-all-israel",
        title: "David becomes king over all Israel",
        description:
            "The elders of Israel come to David at Hebron and anoint him king over Israel.",
        placeId: "hebron",
        periodId: "united-monarchy",
        personIds: ["david"],
        approximateDate: "c. 1003 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Samuel",
                chapter: 5,
                startVerse: 1,
                endVerse: 5,
            },
        ],
    },
    {
        id: "david-captures-jerusalem",
        title: "David establishes Jerusalem as his capital",
        description:
            "David captures the stronghold of Zion and establishes Jerusalem as the political centre of the united kingdom.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["david"],
        approximateDate: "c. 1000 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Samuel",
                chapter: 5,
                startVerse: 6,
                endVerse: 10,
            },
        ],
    },
    {
        id: "david-captures-zion",
        title: "David captures the stronghold of Zion",
        description:
            "David captures the stronghold of Zion from the Jebusites and establishes the City of David.",
        placeId: "zion",
        periodId: "united-monarchy",
        personIds: ["david"],
        approximateDate: "c. 1000 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Samuel",
                chapter: 5,
                startVerse: 6,
                endVerse: 10,
            },
        ],
    },
    {
        id: "ark-brought-jerusalem",
        title: "The ark is brought to Jerusalem",
        description:
            "David brings the ark of the covenant to Jerusalem with celebration and worship.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["david"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Samuel",
                chapter: 6,
            },
        ],
    },
    {
        id: "davidic-covenant",
        title: "God makes covenant promises to David",
        description:
            "God promises David that his house and kingdom will endure, establishing the covenant associated with David's royal line.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["david"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Samuel",
                chapter: 7,
            },
        ],
    },
    {
        id: "solomon-made-king",
        title: "Solomon is proclaimed king",
        description:
            "David commands that Solomon be anointed king, and Solomon is publicly proclaimed as David's successor.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["david", "solomon", "nathan", "bathsheba"],
        approximateDate: "c. 970 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 1,
                startVerse: 28,
                endVerse: 40,
            },
        ],
    },
    {
        id: "david-dies",
        title: "David dies and Solomon's kingdom is established",
        description:
            "After instructing Solomon, David dies following forty years of kingship, and Solomon's rule is firmly established.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["david", "solomon"],
        approximateDate: "c. 970 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 2,
                startVerse: 1,
                endVerse: 12,
            },
        ],
    },
    {
        id: "solomon-asks-wisdom",
        title: "Solomon asks God for wisdom",
        description:
            "God appears to Solomon and invites him to ask for what he desires. Solomon asks for wisdom to govern God's people.",
        placeId: "gibeon",
        periodId: "united-monarchy",
        personIds: ["solomon"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 3,
                startVerse: 4,
                endVerse: 15,
            },
        ],
    },
    {
        id: "solomon-builds-temple",
        title: "Solomon builds the Temple",
        description:
            "Solomon begins building the Temple of the Lord in Jerusalem, establishing the permanent house associated with Israel's worship.",
        placeId: "temple-mount",
        periodId: "united-monarchy",
        personIds: ["solomon"],
        approximateDate: "10th century BC",
        datePrecision: "range",
        references: [
            {
                book: "1 Kings",
                chapter: 6,
            },
        ],
    },
    {
        id: "temple-dedicated",
        title: "Solomon dedicates the Temple",
        description:
            "The ark is brought into the Temple, the glory of the Lord fills the house, and Solomon leads Israel in prayer and dedication before God.",
        placeId: "temple-mount",
        periodId: "united-monarchy",
        personIds: ["solomon"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 8,
            },
        ],
    },
    {
        id: "solomon-kingdom-prospers",
        title: "Solomon's kingdom prospers",
        description:
            "Israel experiences a period of peace, prosperity, administration, and international influence during Solomon's reign.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["solomon"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 4,
            },
        ],
    },
    {
        id: "queen-sheba-visits-solomon",
        title: "The Queen of Sheba visits Solomon",
        description:
            "The Queen of Sheba comes to Jerusalem after hearing of Solomon's fame and wisdom, and she recognises the greatness of what God has given him.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["solomon", "queen-of-sheba"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 10,
                startVerse: 1,
                endVerse: 13,
            },
        ],
    },
    {
        id: "solomon-turns-away",
        title: "Solomon turns away from the Lord",
        description:
            "In Solomon's later years, his foreign wives turn his heart after other gods, and the Lord declares that the kingdom will be torn from his house after his reign.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["solomon"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 11,
                startVerse: 1,
                endVerse: 13,
            },
        ],
    },
    {
        id: "solomon-dies",
        title: "Solomon dies",
        description:
            "Solomon dies after forty years of reign, and his son Rehoboam succeeds him.",
        placeId: "jerusalem",
        periodId: "united-monarchy",
        personIds: ["solomon"],
        approximateDate: "c. 930 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 11,
                startVerse: 41,
                endVerse: 43,
            },
        ],
    },
    {
        id: "kingdom-divides",
        title: "The kingdom divides",
        description:
            "After Rehoboam refuses the request of the northern tribes to lighten their burden, the kingdom divides. Rehoboam rules Judah while Jeroboam becomes king over the northern tribes.",
        placeId: "shechem",
        periodId: "united-monarchy",
        personIds: ["rehoboam", "jeroboam"],
        approximateDate: "c. 930 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 1,
                endVerse: 20,
            },
        ],
    },
    {
        id: "jeroboam-king-israel",
        title: "Jeroboam becomes king over Israel",
        description:
            "The northern tribes make Jeroboam king after rejecting the rule of Rehoboam.",
        placeId: "shechem",
        periodId: "divided-kingdom",
        personIds: ["jeroboam"],
        approximateDate: "c. 930 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 20,
            },
        ],
    },
    {
        id: "rehoboam-rules-judah",
        title: "Rehoboam rules Judah",
        description:
            "Rehoboam continues as king in Jerusalem over Judah after the northern tribes separate from David's royal house.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["rehoboam"],
        approximateDate: "c. 930 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 21,
                endVerse: 24,
            },
        ],
    },
    {
        id: "jeroboam-bethel",
        title: "Jeroboam establishes worship at Bethel",
        description:
            "Jeroboam sets up a golden calf at Bethel as part of an alternative system of worship for the northern kingdom.",
        placeId: "bethel",
        periodId: "divided-kingdom",
        personIds: ["jeroboam"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 25,
                endVerse: 33,
            },
        ],
    },
    {
        id: "jeroboam-dan",
        title: "Jeroboam establishes worship at Dan",
        description:
            "Jeroboam places another golden calf at Dan as a northern worship centre.",
        placeId: "dan",
        periodId: "divided-kingdom",
        personIds: ["jeroboam"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 28,
                endVerse: 30,
            },
        ],
    },
    {
        id: "elijah-announces-drought",
        title: "Elijah announces a drought",
        description:
            "Elijah tells Ahab that there will be neither dew nor rain except at his word.",
        placeId: "samaria",
        periodId: "divided-kingdom",
        personIds: ["elijah", "ahab"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 17,
                startVerse: 1,
            },
        ],
    },
    {
        id: "elijah-cherith",
        title: "Elijah stays by the Brook Cherith",
        description:
            "God directs Elijah to the Brook Cherith, where he is sustained during the drought.",
        placeId: "brook-cherith",
        periodId: "divided-kingdom",
        personIds: ["elijah"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 17,
                startVerse: 2,
                endVerse: 7,
            },
        ],
    },
    {
        id: "elijah-zarephath",
        title: "Elijah stays with the widow of Zarephath",
        description:
            "Elijah goes to Zarephath, where God provides for him and a widow during the famine.",
        placeId: "zarephath",
        periodId: "divided-kingdom",
        personIds: ["elijah"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 17,
                startVerse: 8,
                endVerse: 24,
            },
        ],
    },
    {
        id: "carmel-confrontation",
        title: "Elijah confronts the prophets of Baal",
        description:
            "Elijah gathers Israel at Mount Carmel and calls the people to choose whom they will serve. The Lord answers by fire.",
        placeId: "mount-carmel",
        periodId: "divided-kingdom",
        personIds: ["elijah", "ahab"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 18,
                startVerse: 20,
                endVerse: 40,
            },
        ],
    },
    {
        id: "rain-returns",
        title: "The drought ends",
        description:
            "After Elijah prays, rain returns to the land following the confrontation at Mount Carmel.",
        placeId: "mount-carmel",
        periodId: "divided-kingdom",
        personIds: ["elijah", "ahab"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 18,
                startVerse: 41,
                endVerse: 46,
            },
        ],
    },
    {
        id: "naboth-vineyard",
        title: "Naboth's vineyard",
        description:
            "Ahab desires Naboth's vineyard in Jezreel, and Jezebel arranges Naboth's death. Elijah confronts Ahab over the injustice.",
        placeId: "jezreel",
        periodId: "divided-kingdom",
        personIds: ["ahab", "jezebel", "elijah"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 21,
            },
        ],
    },
    {
        id: "elijah-flees-jezebel",
        title: "Elijah flees from Jezebel",
        description:
            "After Jezebel threatens his life, Elijah leaves the northern kingdom and travels south into the wilderness.",
        placeId: "beersheba",
        periodId: "divided-kingdom",
        personIds: ["elijah", "jezebel"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 19,
                startVerse: 1,
                endVerse: 8,
            },
        ],
    },
    {
        id: "elijah-at-horeb",
        title: "Elijah encounters the Lord at Horeb",
        description:
            "Elijah reaches Horeb, the mountain of God, where the Lord speaks to him and gives him further instructions for his prophetic ministry.",
        placeId: "mount-horeb",
        periodId: "divided-kingdom",
        personIds: ["elijah"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 19,
                startVerse: 9,
                endVerse: 18,
            },
        ],
    },
    {
        id: "elijah-calls-elisha",
        title: "Elijah calls Elisha",
        description:
            "Elijah finds Elisha ploughing and throws his cloak over him, calling him to follow and serve alongside him.",
        placeId: "jezreel",
        periodId: "divided-kingdom",
        personIds: ["elijah", "elisha"],
        datePrecision: "approximate",
        references: [
            {
                book: "1 Kings",
                chapter: 19,
                startVerse: 19,
                endVerse: 21,
            },
        ],
    },
    {
        id: "elijah-taken-up",
        title: "Elijah is taken up",
        description:
            "Elijah is taken up, and Elisha receives Elijah's mantle and continues the prophetic ministry.",
        placeId: "jericho",
        periodId: "divided-kingdom",
        personIds: ["elijah", "elisha"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 2,
                startVerse: 1,
                endVerse: 18,
            },
        ],
    },
    {
        id: "elisha-heals-jericho-water",
        title: "Elisha heals the water at Jericho",
        description:
            "Elisha throws salt into the spring at Jericho, and the Lord heals the water.",
        placeId: "jericho",
        periodId: "divided-kingdom",
        personIds: ["elisha"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 2,
                startVerse: 19,
                endVerse: 22,
            },
        ],
    },
    {
        id: "shunammite-son",
        title: "Elisha restores the Shunammite woman's son",
        description:
            "Elisha prays to the Lord, and the son of the Shunammite woman is restored to life.",
        placeId: "shunem",
        periodId: "divided-kingdom",
        personIds: ["elisha"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 4,
                startVerse: 8,
                endVerse: 37,
            },
        ],
    },
    {
        id: "elisha-dothan",
        title: "Elisha is surrounded at Dothan",
        description:
            "The army of Aram surrounds Dothan to capture Elisha, but God reveals the heavenly host surrounding the prophet.",
        placeId: "dothan",
        periodId: "divided-kingdom",
        personIds: ["elisha"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 6,
                startVerse: 8,
                endVerse: 23,
            },
        ],
    },
    {
        id: "hoshea-rules-israel",
        title: "Hoshea becomes king of Israel",
        description:
            "Hoshea becomes king over the northern kingdom during its final years before Assyria's conquest.",
        placeId: "samaria",
        periodId: "divided-kingdom",
        personIds: ["hoshea"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 17,
                startVerse: 1,
                endVerse: 2,
            },
        ],
    },
    {
        id: "assyria-besieges-samaria",
        title: "Assyria besieges Samaria",
        description:
            "The king of Assyria comes against Hoshea, and Samaria is besieged for three years.",
        placeId: "samaria",
        periodId: "divided-kingdom",
        personIds: ["hoshea", "shalmaneser"],
        approximateDate: "c. 724–722 BC",
        datePrecision: "range",
        references: [
            {
                book: "2 Kings",
                chapter: 17,
                startVerse: 3,
                endVerse: 5,
            },
        ],
    },
    {
        id: "samaria-falls",
        title: "Samaria falls to Assyria",
        description:
            "Samaria is captured, bringing the northern kingdom of Israel to an end.",
        placeId: "samaria",
        periodId: "divided-kingdom",
        personIds: ["hoshea", "shalmaneser", "sargon"],
        approximateDate: "722 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 17,
                startVerse: 6,
            },
        ],
    },
    {
        id: "israel-deported-assyria",
        title: "Israel is deported into Assyria",
        description:
            "After the fall of Samaria, many Israelites are carried away into Assyrian territory.",
        placeId: "assyria",
        periodId: "divided-kingdom",
        personIds: ["sargon"],
        approximateDate: "late 8th century BC",
        datePrecision: "range",
        references: [
            {
                book: "2 Kings",
                chapter: 17,
                startVerse: 6,
                endVerse: 23,
            },
        ],
    },
    {
        id: "hezekiah-reforms-judah",
        title: "Hezekiah leads reform in Judah",
        description:
            "Hezekiah restores worship of the Lord and leads religious reforms throughout Judah.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["hezekiah"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 18,
                startVerse: 1,
                endVerse: 8,
            },
        ],
    },
    {
        id: "sennacherib-captures-lachish",
        title: "Sennacherib captures Lachish",
        description:
            "During his campaign against Judah, Sennacherib attacks and captures Lachish before threatening Jerusalem.",
        placeId: "lachish",
        periodId: "divided-kingdom",
        personIds: ["sennacherib", "hezekiah"],
        approximateDate: "701 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 18,
                startVerse: 13,
                endVerse: 17,
            },
        ],
    },
    {
        id: "assyria-threatens-jerusalem",
        title: "Assyria threatens Jerusalem",
        description:
            "Assyrian officials come against Jerusalem and attempt to intimidate Hezekiah and the people of Judah.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["hezekiah", "sennacherib", "isaiah"],
        approximateDate: "701 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 18,
                startVerse: 17,
                endVerse: 37,
            },
        ],
    },
    {
        id: "hezekiah-seeks-lord",
        title: "Hezekiah seeks the Lord",
        description:
            "Hezekiah responds to Assyria's threat by seeking the Lord and sending messengers to the prophet Isaiah.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["hezekiah", "isaiah"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 19,
                startVerse: 1,
                endVerse: 7,
            },
        ],
    },
    {
        id: "jerusalem-delivered-assyria",
        title: "Jerusalem is delivered from Assyria",
        description:
            "The Lord delivers Jerusalem from the Assyrian army after Hezekiah prays and Isaiah declares God's word concerning the city.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["hezekiah", "isaiah", "sennacherib"],
        approximateDate: "701 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 19,
                startVerse: 14,
                endVerse: 37,
            },
        ],
    },
    {
        id: "book-of-law-found",
        title: "The Book of the Law is found",
        description:
            "During repairs to the Temple, the Book of the Law is found and brought to King Josiah.",
        placeId: "temple-mount",
        periodId: "divided-kingdom",
        personIds: ["josiah"],
        approximateDate: "c. 622 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 22,
                startVerse: 3,
                endVerse: 13,
            },
        ],
    },
    {
        id: "huldah-consulted",
        title: "Huldah is consulted",
        description:
            "Josiah's officials consult the prophetess Huldah concerning the words of the Book of the Law.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["josiah", "huldah"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 22,
                startVerse: 14,
                endVerse: 20,
            },
        ],
    },
    {
        id: "josiah-renews-covenant",
        title: "Josiah renews the covenant",
        description:
            "Josiah gathers the people in Jerusalem, reads the Book of the Covenant, and renews the covenant before the Lord.",
        placeId: "temple-mount",
        periodId: "divided-kingdom",
        personIds: ["josiah"],
        approximateDate: "c. 622 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 23,
                startVerse: 1,
                endVerse: 3,
            },
        ],
    },
    {
        id: "josiah-reforms-judah",
        title: "Josiah removes idolatry from Judah",
        description:
            "Josiah carries out widespread reforms, removing idolatrous practices and restoring worship according to the covenant.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["josiah"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 23,
                startVerse: 4,
                endVerse: 25,
            },
        ],
    },
    {
        id: "josiah-dies-megiddo",
        title: "Josiah dies after the battle at Megiddo",
        description:
            "Josiah confronts Pharaoh Neco at Megiddo and is mortally wounded, bringing his reign to an end.",
        placeId: "megiddo",
        periodId: "divided-kingdom",
        personIds: ["josiah"],
        approximateDate: "609 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 23,
                startVerse: 29,
                endVerse: 30,
            },
        ],
    },
    {
        id: "babylon-dominates-judah",
        title: "Babylon begins dominating Judah",
        description:
            "During Jehoiakim's reign, Nebuchadnezzar of Babylon comes against Judah and the kingdom enters the final period before exile.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["jehoiakim", "nebuchadnezzar"],
        approximateDate: "late 7th century BC",
        datePrecision: "range",
        references: [
            {
                book: "2 Kings",
                chapter: 24,
                startVerse: 1,
                endVerse: 7,
            },
        ],
    },
    {
        id: "jehoiachin-exiled",
        title: "Jehoiachin is taken to Babylon",
        description:
            "Jerusalem submits to Nebuchadnezzar, and King Jehoiachin, members of the royal household, officials, craftsmen, and others are carried into exile in Babylon.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["jehoiachin", "nebuchadnezzar"],
        approximateDate: "597 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 24,
                startVerse: 8,
                endVerse: 17,
            },
        ],
    },
    {
        id: "zedekiah-rebels",
        title: "Zedekiah rebels against Babylon",
        description:
            "Zedekiah rebels against the king of Babylon during the final years of the kingdom of Judah.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["zedekiah", "nebuchadnezzar"],
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 24,
                startVerse: 18,
                endVerse: 20,
            },
        ],
    },
    {
        id: "babylon-besieges-jerusalem",
        title: "Babylon besieges Jerusalem",
        description:
            "Nebuchadnezzar and the Babylonian army surround Jerusalem during the reign of Zedekiah, beginning the final siege of the city.",
        placeId: "jerusalem",
        periodId: "divided-kingdom",
        personIds: ["zedekiah", "nebuchadnezzar"],
        approximateDate: "589–587/586 BC",
        datePrecision: "range",
        references: [
            {
                book: "2 Kings",
                chapter: 25,
                startVerse: 1,
                endVerse: 3,
            },
        ],
    },
    {
        id: "jerusalem-falls-babylon",
        title: "Jerusalem falls to Babylon",
        description:
            "The Babylonian siege succeeds, the city is broken through, and Zedekiah flees before being captured.",
        placeId: "jerusalem",
        periodId: "exile",
        personIds: ["zedekiah", "nebuchadnezzar"],
        approximateDate: "587/586 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 25,
                startVerse: 4,
                endVerse: 7,
            },
        ],
    },
    {
        id: "temple-destroyed-babylon",
        title: "The Temple is destroyed",
        description:
            "The Babylonians burn the house of the Lord, the royal palace, and the buildings of Jerusalem, and tear down the city's walls.",
        placeId: "temple-mount",
        periodId: "exile",
        personIds: ["nebuchadnezzar"],
        approximateDate: "587/586 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 25,
                startVerse: 8,
                endVerse: 10,
            },
        ],
    },
    {
        id: "judah-exiled-babylon",
        title: "Judah is carried into exile",
        description:
            "After Jerusalem's fall, many of the remaining people of Judah are carried away to Babylon.",
        placeId: "babylon",
        periodId: "exile",
        personIds: ["nebuchadnezzar"],
        approximateDate: "587/586 BC",
        datePrecision: "approximate",
        references: [
            {
                book: "2 Kings",
                chapter: 25,
                startVerse: 11,
                endVerse: 21,
            },
        ],
    },
    {
        id: "birth-of-jesus",
        title: "Birth of Jesus",
        description:
            "Jesus is born in Bethlehem during the reign of Herod the Great.",
        placeId: "bethlehem",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
        approximateDate: "c. 6–4 BC",
        datePrecision: "range",
        references: [
            {
                book: "Matthew",
                chapter: 2,
                startVerse: 1,
                endVerse: 12,
            },
            {
                book: "Luke",
                chapter: 2,
                startVerse: 1,
                endVerse: 20,
            },
        ],
    },
    {
        id: "jesus-grows-up-nazareth",
        title: "Jesus grows up in Nazareth",
        description:
            "After returning from Egypt, Jesus is raised in Nazareth in Galilee.",
        placeId: "nazareth",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
        datePrecision: "unknown",
        references: [
            {
                book: "Matthew",
                chapter: 2,
                startVerse: 19,
                endVerse: 23,
            },
            {
                book: "Luke",
                chapter: 2,
                startVerse: 39,
                endVerse: 40,
            },
        ],
    },
];