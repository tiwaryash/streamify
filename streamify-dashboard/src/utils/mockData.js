const generateMockData = (range) => {
    // Generate top songs data
    const generateTopSongsData = (range) => {
      const topSongsByRange = {
        '24h': [
          { name: "Lovin On Me", artist: "Jack Harlow", streams: 12_500, color: "#34D399" },
          { name: "Greedy", artist: "Tate McRae", streams: 11_800, color: "#F59E0B" },
          { name: "Paint The Town Red", artist: "Doja Cat", streams: 10_950, color: "#818CF8" },
          { name: "Espresso", artist: "Sabrina Carpenter", streams: 10_500, color: "#EC4899" },
          { name: "End of Beginning", artist: "Djo", streams: 10_200, color: "#8B5CF6" }
        ],
        '7d': [
          { name: "Beautiful Things", artist: "Benson Boone", streams: 42_000, color: "#34D399" },
          { name: "Texas Hold 'Em", artist: "Beyoncé", streams: 40_800, color: "#F59E0B" },
          { name: "Good Luck, Babe!", artist: "Chappell Roan", streams: 39_500, color: "#818CF8" },
          { name: "Lose Control", artist: "Teddy Swims", streams: 38_900, color: "#EC4899" },
          { name: "Houdini", artist: "Dua Lipa", streams: 37_600, color: "#8B5CF6" }
        ],
        '30d': [
          { name: "Not Like Us", artist: "Kendrick Lamar", streams: 150_000, color: "#34D399" },
          { name: "Million Dollar Baby", artist: "Tommy Richman", streams: 142_500, color: "#F59E0B" },
          { name: "Fortnight", artist: "Taylor Swift ft. Post Malone", streams: 139_000, color: "#818CF8" },
          { name: "Carnival", artist: "The Weeknd", streams: 132_500, color: "#EC4899" },
          { name: "I Had Some Help", artist: "Post Malone ft. Morgan Wallen", streams: 130_200, color: "#8B5CF6" }
        ],
        '90d': [
          { name: "Slime You Out", artist: "Drake ft. SZA", streams: 450_000, color: "#34D399" },
          { name: "3D", artist: "Jung Kook ft. Jack Harlow", streams: 430_500, color: "#F59E0B" },
          { name: "Goodbye", artist: "Gracie Abrams", streams: 420_300, color: "#818CF8" },
          { name: "LUNAR", artist: "Travis Scott", streams: 415_900, color: "#EC4899" },
          { name: "Cruel Summer", artist: "Taylor Swift", streams: 410_700, color: "#8B5CF6" }
        ],
        '1y': [
          { name: "Kill Bill", artist: "SZA", streams: 2_300_000, color: "#34D399" },
          { name: "Flowers", artist: "Miley Cyrus", streams: 2_180_000, color: "#F59E0B" },
          { name: "Last Night", artist: "Morgan Wallen", streams: 2_050_000, color: "#818CF8" },
          { name: "Calm Down", artist: "Rema ft. Selena Gomez", streams: 1_970_000, color: "#EC4899" },
          { name: "Anti-Hero", artist: "Taylor Swift", streams: 1_900_000, color: "#8B5CF6" }
        ]
      };
    
      return topSongsByRange[range] || topSongsByRange['24h'];
    };
    
  
    // Generate user growth data
    const generateUserGrowthData = (range) => {
      const dataPoints = {
        '24h': 24,
        '7d': 7,
        '30d': 30,
        '90d': 90,
        '1y': 12
      };
  
      return Array.from({ length: dataPoints[range] }, (_, i) => ({
        label: `${i + 1}${range === '24h' ? 'h' : 'd'}`,
        users: Math.floor(Math.random() * 1000) + 500,
        active: Math.floor(Math.random() * 800) + 200
      }));
    };
  
    // Generate revenue data
    const generateRevenueData = () => {
      return [
        { name: "Subscriptions", value: 75 },
        { name: "Ads", value: 25 },
        { name: "Sponsorships", value: 15 },
        { name: "Merchandise", value: 15 },
        { name: "Affiliate Marketing", value: 10 },
      ];
    };
  
    const additionalSongs = [
      { name: "Blinding Lights", artist: "The Weeknd", streams: 20000000 },
      { name: "Shape of You", artist: "Ed Sheeran", streams: 30000000 },
      { name: "Dance Monkey", artist: "Tones and I", streams: 15000000 },
      { name: "Someone You Loved", artist: "Lewis Capaldi", streams: 18000000 },
      { name: "Bad Guy", artist: "Billie Eilish", streams: 22000000 },
      { name: "Senorita", artist: "Shawn Mendes & Camila Cabello", streams: 25000000 },
      { name: "Stay", artist: "The Kid LAROI & Justin Bieber", streams: 17000000 },
      { name: "Watermelon Sugar", artist: "Harry Styles", streams: 16000000 },
      { name: "Good 4 U", artist: "Olivia Rodrigo", streams: 14000000 },
      { name: "Levitating", artist: "Dua Lipa", streams: 19000000 },
      { name: "Peaches", artist: "Justin Bieber ft. Daniel Caesar & Giveon", streams: 13000000 },
      { name: "Montero (Call Me By Your Name)", artist: "Lil Nas X", streams: 12000000 },
      { name: "Kiss Me More", artist: "Doja Cat ft. SZA", streams: 11000000 },
      { name: "Save Your Tears", artist: "The Weeknd & Ariana Grande", streams: 11500000 },
      { name: "Industry Baby", artist: "Lil Nas X & Jack Harlow", streams: 12500000 },
      { name: "Shivers", artist: "Ed Sheeran", streams: 10500000 },
      { name: "As It Was", artist: "Harry Styles", streams: 13500000 },
      { name: "Heat Waves", artist: "Glass Animals", streams: 14500000 },
      { name: "Butter", artist: "BTS", streams: 15500000 },
      { name: "Stay With Me", artist: "Sam Smith", streams: 16500000 },
      { name: "Happier Than Ever", artist: "Billie Eilish", streams: 17500000 },
    ];
  
    const revenueMapping = {
      "Subscriptions": 100, // Base revenue value for subscriptions
      "Ads": 50,            // Base revenue value for ads
      "Sponsorships": 30,   // Base revenue value for sponsorships
      "Merchandise": 20,     // Base revenue value for merchandise
      "Affiliate Marketing": 10, // Base revenue value for affiliate marketing
    };
  
    // Function to generate table data based on revenue source
    const generateTableData = (range) => {
      const topSongs = generateTopSongsData(range);
      const randomAdditionalSongs = additionalSongs.sort(() => 0.5 - Math.random()).slice(0, 10); // Select 10 random additional songs
      const combinedSongs = [...topSongs, ...randomAdditionalSongs];
  
      // Generate the final table data
      const tableData = [];
      
      // Loop through each revenue source and generate users based on revenue value
      for (const source in revenueMapping) {
        const userCount = revenueMapping[source]; // Use the revenue value to determine user count
  
        for (let i = 0; i < userCount; i++) {
          const song = combinedSongs[Math.floor(Math.random() * combinedSongs.length)]; // Randomly select a song
          tableData.push({
            song: song.name,
            artist: song.artist,
            streams: song.streams,
            revenue: Math.floor(Math.random() * 900) + 100, // Random revenue
            userId: `User ${tableData.length + 1}`, // Unique user ID
            date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            revenueSource: source // Assign the revenue source
          });
        }
      }
  
      return tableData;
    };
  
    // Generate top artists data
    const generateTopArtistsData = (range) => {
      const topArtistsByRange = {
        '24h': [
          { name: "Taylor Swift", streams: 12500000, image: "https://i.pravatar.cc/150?img=1", change: "+12%" },
          { name: "Drake", streams: 10800000, image: "https://i.pravatar.cc/150?img=2", change: "+8%" },
          { name: "The Weeknd", streams: 9200000, image: "https://i.pravatar.cc/150?img=3", change: "+15%" },
          { name: "Bad Bunny", streams: 8900000, image: "https://i.pravatar.cc/150?img=4", change: "+5%" },
          { name: "Ed Sheeran", streams: 8500000, image: "https://i.pravatar.cc/150?img=5", change: "+10%" }
        ],
        '7d': [
          { name: "Miley Cyrus", streams: 2500000, image: "https://i.pravatar.cc/150?img=6", change: "+20%" },
          { name: "SZA", streams: 2100000, image: "https://i.pravatar.cc/150?img=7", change: "+18%" },
          { name: "Taylor Swift", streams: 1800000, image: "https://i.pravatar.cc/150?img=1", change: "+15%" },
          { name: "Metro Boomin", streams: 1500000, image: "https://i.pravatar.cc/150?img=8", change: "+10%" },
          { name: "Rema", streams: 1200000, image: "https://i.pravatar.cc/150?img=9", change: "+8%" }
        ],
        '30d': [
          { name: "Drake", streams: 8500000, image: "https://i.pravatar.cc/150?img=10", change: "+14%" },
          { name: "Bad Bunny", streams: 7800000, image: "https://i.pravatar.cc/150?img=11", change: "+10%" },
          { name: "Ed Sheeran", streams: 7200000, image: "https://i.pravatar.cc/150?img=5", change: "+12%" },
          { name: "Billie Eilish", streams: 6900000, image: "https://i.pravatar.cc/150?img=12", change: "+9%" },
          { name: "Ariana Grande", streams: 6500000, image: "https://i.pravatar.cc/150?img=13", change: "+7%" }
        ],
        '90d': [
          { name: "The Weeknd", streams: 18000000, image: "https://i.pravatar.cc/150?img=3", change: "+22%" },
          { name: "Rema", streams: 15800000, image: "https://i.pravatar.cc/150?img=9", change: "+18%" },
          { name: "Metro Boomin", streams: 14000000, image: "https://i.pravatar.cc/150?img=8", change: "+15%" },
          { name: "Kanye West", streams: 13000000, image: "https://i.pravatar.cc/150?img=14", change: "+10%" },
          { name: "Post Malone", streams: 12000000, image: "https://i.pravatar.cc/150?img=15", change: "+12%" }
        ],
        '1y': [
          { name: "Taylor Swift", streams: 75000000, image: "https://i.pravatar.cc/150?img=1", change: "+30%" },
          { name: "Drake", streams: 72000000, image: "https://i.pravatar.cc/150?img=2", change: "+25%" },
          { name: "The Weeknd", streams: 69000000, image: "https://i.pravatar.cc/150?img=3", change: "+20%" },
          { name: "Ed Sheeran", streams: 65000000, image: "https://i.pravatar.cc/150?img=5", change: "+18%" },
          { name: "Bad Bunny", streams: 60000000, image: "https://i.pravatar.cc/150?img=4", change: "+15%" }
        ]
    
        // Add other ranges as needed
      };
  
      return topArtistsByRange[range] || topArtistsByRange['7d'];
    };
  
    // Base metrics data
    const baseMetricsData = {
      '24h': {
        totalUsers: '1,234',
        activeUsers: '987',
        totalStreams: '45,678',
        revenue: '2,345',
        topArtist: generateTopArtistsData(range)[0].name, // Add top artist to metrics
        topArtists: generateTopArtistsData(range).map(artist => artist.name), // Returns an array of artist names

      },
      '7d': {
        totalUsers: '8,456',
        activeUsers: '6,789',
        totalStreams: '234,567',
        revenue: '12,456',
        topArtist: generateTopArtistsData(range)[0].name, // Add top artist to metrics
        topArtists: generateTopArtistsData(range).map(artist => artist.name), // Returns an array of artist names

      },
      '30d': {
        totalUsers: '34,567',
        activeUsers: '28,901',
        totalStreams: '789,012',
        revenue: '45,678',
        topArtist: generateTopArtistsData(range)[0].name, // Add top artist to metrics
        topArtists: generateTopArtistsData(range).map(artist => artist.name), // Returns an array of artist names

      },
      '90d': {
        totalUsers: '78,901',
        activeUsers: '65,432',
        totalStreams: '2,345,678',
        revenue: '123,456',
        topArtist: generateTopArtistsData(range)[0].name, // Add top artist to metrics
        topArtists: generateTopArtistsData(range).map(artist => artist.name), // Returns an array of artist names

      },
      '1y': {
        totalUsers: '100,000',
        activeUsers: '80,000',
        totalStreams: '5,000,000',
        revenue: '450,000',
        topArtist: generateTopArtistsData(range)[0].name, // Add top artist to metrics
        topArtists: generateTopArtistsData(range).map(artist => artist.name), // Returns an array of artist names

      }
    };
  
    return {
      metrics: baseMetricsData[range],
      userGrowth: generateUserGrowthData(range),
      topSongs: generateTopSongsData(range),
      revenue: generateRevenueData(),
      tableData: generateTableData(range),
      topArtists: generateTopArtistsData(range)
    };
  };
  
  export default generateMockData;