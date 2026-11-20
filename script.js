(function () {
      'use strict';

      // 1. CAMPUS GRAPH NODES (INCLUDES BLOCK 34, BLOCK 33, CENTRAL LIBRARY, BLOCK 38)
      const CAMPUS_NODES = {
        main_gate_plaza: {
          id: 'main_gate_plaza',
          name: 'Main Gate QR Plaza',
          shortName: 'Main Gate QR',
          building: 'Outdoor',
          floor: 'Outdoor',
          type: 'entrance',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '24 Hours',
          sensoryLandmark: 'Main Gate tactile yellow paving strip; QR pole at 105 cm height on the right.',
          keywords: ['main gate', 'gate', 'qr', 'plaza', 'मेन गेट', 'गेट', 'ਮੇਨ ਗੇਟ'],
          coords: { x: 80, y: 200 },
          gps: '31.2536,75.7037'
        },
        central_courtyard: {
          id: 'central_courtyard',
          name: 'Central Courtyard Hub',
          shortName: 'Courtyard Hub',
          building: 'Outdoor',
          floor: 'Outdoor',
          type: 'pathway',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '24 Hours',
          sensoryLandmark: 'Wide brick walkway; fountain sound to the north.',
          keywords: ['courtyard', 'center'],
          coords: { x: 250, y: 150 },
          gps: '31.2552,75.7048'
        },
        north_walkway: {
          id: 'north_walkway',
          name: 'North Tactile Walkway',
          shortName: 'North Walkway',
          building: 'Outdoor',
          floor: 'Outdoor',
          type: 'pathway',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '24 Hours',
          sensoryLandmark: 'Continuous raised tactile guide tiles beside shaded trees.',
          keywords: ['walkway', 'north'],
          coords: { x: 395, y: 95 },
          gps: '31.2560,75.7055'
        },
        b34_ramp_entrance: {
          id: 'b34_ramp_entrance',
          name: 'Block 34 North Ramp Entrance',
          shortName: 'Block 34 Ramp',
          building: 'Block 34',
          floor: 'Ground',
          type: 'ramp',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '07:00 AM - 09:00 PM',
          sensoryLandmark: '1:12 concrete ramp with double stainless steel handrails.',
          keywords: ['ramp'],
          coords: { x: 180, y: 100 },
          gps: '31.2558,75.7042'
        },
        b34_steps_entrance: {
          id: 'b34_steps_entrance',
          name: 'Block 34 Main Steps',
          shortName: 'Block 34 Steps',
          building: 'Block 34',
          floor: 'Ground',
          type: 'stairs',
          isStepFreeEntry: false,
          hasSeating: false,
          openingHours: '07:00 AM - 09:00 PM',
          sensoryLandmark: '12 concrete steps with high-contrast yellow nosing.',
          keywords: [],
          coords: { x: 200, y: 120 },
          gps: '31.2557,75.7043'
        },
        b34_ground_lobby: {
          id: 'b34_ground_lobby',
          name: 'Block 34 (CSE & AI Hub)',
          shortName: 'Block 34',
          building: 'Block 34',
          floor: 'Ground',
          type: 'academic',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '07:00 AM - 09:00 PM',
          sensoryLandmark: 'Air-conditioned atrium; help desk 4 meters left of entrance.',
          keywords: ['block 34', 'block thirty four', '34', 'cse', 'ब्लॉक 34', 'ਬਲੌਕ 34'],
          coords: { x: 155, y: 75 },
          gps: '31.2559,75.7041'
        },
        b34_lift_b: {
          id: 'b34_lift_b',
          name: 'Block 34 Lift B (Main Elevator)',
          shortName: 'Lift B',
          building: 'Block 34',
          floor: 'Ground',
          type: 'lift',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '07:00 AM - 09:00 PM',
          sensoryLandmark: 'Braille floor buttons on right panel with voice chime.',
          keywords: [],
          coords: { x: 130, y: 60 },
          gps: '31.2559,75.7040'
        },
        b34_lift_a: {
          id: 'b34_lift_a',
          name: 'Block 34 Lift A (West Backup)',
          shortName: 'Lift A',
          building: 'Block 34',
          floor: 'Ground',
          type: 'lift',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '07:00 AM - 09:00 PM',
          sensoryLandmark: 'Wide wheelchair-accessible elevator cabin in west wing.',
          keywords: [],
          coords: { x: 105, y: 80 },
          gps: '31.2558,75.7039'
        },
        b34_ai_lab_f1: {
          id: 'b34_ai_lab_f1',
          name: 'Block 34 AI Lab (Floor 1)',
          shortName: 'Block 34 AI Lab',
          building: 'Block 34',
          floor: 'Floor 1',
          type: 'academic',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '08:30 AM - 06:00 PM',
          sensoryLandmark: 'Double glass doors with zero threshold; hum of servers.',
          keywords: ['ai lab', 'lab', '104', 'लैब'],
          coords: { x: 155, y: 55 },
          gps: '31.2560,75.7041'
        },
        b34_tuck_shop: {
          id: 'b34_tuck_shop',
          name: 'Block 34 Tuck Shop & Print Hub',
          shortName: 'Block 34 Tuck Shop',
          building: 'Block 34',
          floor: 'Ground',
          type: 'tuck_shop',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '08:00 AM - 08:30 PM',
          sensoryLandmark: 'Sound of laser printers and aroma of snacks; flush counter.',
          keywords: ['block 34 tuck', 'print'],
          coords: { x: 185, y: 60 },
          gps: '31.2560,75.7043'
        },
        b34_water_g: {
          id: 'b34_water_g',
          name: 'Block 34 RO Water & Rest Seats',
          shortName: 'Block 34 Water',
          building: 'Block 34',
          floor: 'Ground',
          type: 'water_station',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '07:00 AM - 09:00 PM',
          sensoryLandmark: 'Low-height push-button water cooler beside 3 cushioned benches.',
          keywords: ['block 34 water', 'seat'],
          coords: { x: 145, y: 100 },
          gps: '31.2558,75.7041'
        },
        b34_washroom_g: {
          id: 'b34_washroom_g',
          name: 'Block 34 Accessible Washroom',
          shortName: 'Block 34 Washroom',
          building: 'Block 34',
          floor: 'Ground',
          type: 'washroom_accessible',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '07:00 AM - 09:00 PM',
          sensoryLandmark: 'Tactile restroom sign at chest height; wide sliding door.',
          keywords: ['block 34 washroom'],
          coords: { x: 115, y: 105 },
          gps: '31.2557,75.7040'
        },
        b33_food_court: {
          id: 'b33_food_court',
          name: 'Block 33 Central Food Court',
          shortName: 'Central Food Court',
          building: 'Block 33',
          floor: 'Ground',
          type: 'food_court',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '07:30 AM - 10:30 PM',
          sensoryLandmark: 'Next to the central courtyard ramp; aroma of fresh coffee near the automatic glass entrance.',
          keywords: ['central food court', 'block 33', 'block thirty three', '33', 'ब्लॉक 33'],
          coords: { x: 265, y: 220 },
          gps: '31.2547,75.7051'
        },
        b33_washroom_g: {
          id: 'b33_washroom_g',
          name: 'Block 33 Accessible Washroom',
          shortName: 'Block 33 Washroom',
          building: 'Block 33',
          floor: 'Ground',
          type: 'washroom_accessible',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '07:30 AM - 10:30 PM',
          sensoryLandmark: '6 meters past the juice counter; non-slip matte tile floor.',
          keywords: ['food court washroom', 'block 33 washroom'],
          coords: { x: 295, y: 245 },
          gps: '31.2546,75.7052'
        },
        b33_medical_room: {
          id: 'b33_medical_room',
          name: 'Block 33 Medical & First-Aid Room',
          shortName: 'Medical Room',
          building: 'Block 33',
          floor: 'Ground',
          type: 'medical_room',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '24 Hours',
          sensoryLandmark: 'Quiet east corridor beside Food Court; rubberized floor matting.',
          keywords: ['medical room', 'first aid'],
          coords: { x: 330, y: 220 },
          gps: '31.2548,75.7054'
        },
        lib_ramp_entry: {
          id: 'lib_ramp_entry',
          name: 'Central Library West Ramp',
          shortName: 'Library Ramp',
          building: 'Central Library',
          floor: 'Ground',
          type: 'ramp',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '08:00 AM - 11:00 PM',
          sensoryLandmark: 'Covered gentle ramp leading to automatic sliding glass doors.',
          keywords: [],
          coords: { x: 465, y: 95 },
          gps: '31.2564,75.7061'
        },
        lib_steps_entry: {
          id: 'lib_steps_entry',
          name: 'Central Library Front Stairs',
          shortName: 'Library Stairs',
          building: 'Central Library',
          floor: 'Ground',
          type: 'stairs',
          isStepFreeEntry: false,
          hasSeating: false,
          openingHours: '08:00 AM - 11:00 PM',
          sensoryLandmark: '16 wide stone steps with center brass railing.',
          keywords: [],
          coords: { x: 475, y: 115 },
          gps: '31.2563,75.7062'
        },
        lib_ground_hall: {
          id: 'lib_ground_hall',
          name: 'Central Library Reading Hall',
          shortName: 'Central Library',
          building: 'Central Library',
          floor: 'Ground',
          type: 'academic',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '08:00 AM - 11:00 PM',
          sensoryLandmark: 'Quiet carpeted zone; tactile path leads directly to Library Lift.',
          keywords: ['central library', 'library', 'reading hall', 'लाइब्रेरी', 'ਲਾਇਬ੍ਰੇਰੀ'],
          coords: { x: 510, y: 80 },
          gps: '31.2566,75.7065'
        },
        lib_tuck_shop: {
          id: 'lib_tuck_shop',
          name: 'Library Breezeway Tuck Shop',
          shortName: 'Library Tuck Shop',
          building: 'Central Library',
          floor: 'Ground',
          type: 'tuck_shop',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '08:30 AM - 09:30 PM',
          sensoryLandmark: 'Under covered walkway beside Library West Ramp; zero step.',
          keywords: ['library tuck', 'stationery'],
          coords: { x: 455, y: 118 },
          gps: '31.2562,75.7059'
        },
        lib_food_court: {
          id: 'lib_food_court',
          name: 'Library Terrace Cafe (Floor 1)',
          shortName: 'Library Cafe',
          building: 'Central Library',
          floor: 'Floor 1',
          type: 'food_court',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '09:00 AM - 09:00 PM',
          sensoryLandmark: 'Reached via Library Lift; aroma of baked sandwiches and tea.',
          keywords: ['library cafe', 'terrace cafe', 'cafe'],
          coords: { x: 540, y: 60 },
          gps: '31.2567,75.7066'
        },
        lib_water_station: {
          id: 'lib_water_station',
          name: 'Library Hydration & Quiet Lounge',
          shortName: 'Library Water',
          building: 'Central Library',
          floor: 'Ground',
          type: 'water_station',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '08:00 AM - 11:00 PM',
          sensoryLandmark: 'Chilled water dispenser beside cushioned benches.',
          keywords: ['library water'],
          coords: { x: 545, y: 105 },
          gps: '31.2565,75.7066'
        },
        lib_washroom_g: {
          id: 'lib_washroom_g',
          name: 'Central Library Accessible Washroom',
          shortName: 'Library Washroom',
          building: 'Central Library',
          floor: 'Ground',
          type: 'washroom_accessible',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '08:00 AM - 11:00 PM',
          sensoryLandmark: 'Behind main reference desk with Braille signage.',
          keywords: ['library washroom'],
          coords: { x: 550, y: 82 },
          gps: '31.2566,75.7067'
        },
        b38_ramp_entry: {
          id: 'b38_ramp_entry',
          name: 'Block 38 East Accessible Ramp',
          shortName: 'Block 38 Ramp',
          building: 'Block 38',
          floor: 'Ground',
          type: 'ramp',
          isStepFreeEntry: true,
          hasSeating: false,
          openingHours: '07:00 AM - 10:00 PM',
          sensoryLandmark: 'Wide 1:12 non-slip tiled ramp into Block 38 DSW & Uni-Mall atrium.',
          keywords: [],
          coords: { x: 445, y: 215 },
          gps: '31.2550,75.7060'
        },
        b38_dsw_lobby: {
          id: 'b38_dsw_lobby',
          name: 'Block 38 (DSW & Uni-Mall)',
          shortName: 'Block 38',
          building: 'Block 38',
          floor: 'Ground',
          type: 'academic',
          isStepFreeEntry: true,
          hasSeating: true,
          openingHours: '07:00 AM - 10:00 PM',
          sensoryLandmark: 'Spacious Division of Student Welfare lobby; tactile paving leads to student help counters.',
          keywords: ['block 38', 'block thirty eight', 'block thirty-eight', '38', 'dsw', 'uni mall', 'unimall', 'ब्लॉक 38', 'ਬਲੌਕ 38'],
          coords: { x: 505, y: 225 },
          gps: '31.2551,75.7063'
        }
      };

      // 2. BIDIRECTIONAL EDGES
      const CAMPUS_EDGES = [
        { from: 'main_gate_plaza', to: 'central_courtyard', timeSec: 75, distanceMeters: 60, stepCount: 0, hasTactilePaving: true, instruction: 'Follow the wide yellow tactile paving straight ahead to Central Courtyard Hub.' },
        { from: 'central_courtyard', to: 'north_walkway', timeSec: 65, distanceMeters: 55, stepCount: 0, hasTactilePaving: true, instruction: 'Continue northeast along the shaded North Tactile Walkway.' },
        { from: 'central_courtyard', to: 'b34_ramp_entrance', timeSec: 45, distanceMeters: 35, stepCount: 0, hasTactilePaving: true, instruction: 'Turn left onto the 1:12 concrete ramp with handrails into Block 34.' },
        { from: 'central_courtyard', to: 'b34_steps_entrance', timeSec: 20, distanceMeters: 18, stepCount: 12, hasTactilePaving: false, instruction: 'Climb the 12 main entrance stairs directly into Block 34.' },
        { from: 'b34_ramp_entrance', to: 'b34_ground_lobby', timeSec: 25, distanceMeters: 20, stepCount: 0, hasTactilePaving: true, instruction: 'Pass through the wide double doors into Block 34 Ground Lobby.' },
        { from: 'b34_steps_entrance', to: 'b34_ground_lobby', timeSec: 15, distanceMeters: 12, stepCount: 0, hasTactilePaving: false, instruction: 'Enter Block 34 Ground Lobby straight ahead.' },
        { from: 'b34_ground_lobby', to: 'b34_tuck_shop', timeSec: 20, distanceMeters: 15, stepCount: 0, hasTactilePaving: true, instruction: 'Walk 15 meters past the help desk to Block 34 Tuck Shop.' },
        { from: 'b34_ground_lobby', to: 'b34_water_g', timeSec: 20, distanceMeters: 16, stepCount: 0, hasTactilePaving: true, instruction: 'Turn right in the Ground Lobby toward the RO Water & Rest Seats.' },
        { from: 'b34_water_g', to: 'b34_washroom_g', timeSec: 18, distanceMeters: 14, stepCount: 0, hasTactilePaving: true, instruction: 'Continue 14 meters past the benches to Block 34 Accessible Washroom.' },
        { from: 'b34_ground_lobby', to: 'b34_lift_b', timeSec: 20, distanceMeters: 15, stepCount: 0, hasTactilePaving: true, instruction: 'Follow tactile tiles to Block 34 Lift B (Main Elevator).' },
        { from: 'b34_ground_lobby', to: 'b34_lift_a', timeSec: 35, distanceMeters: 28, stepCount: 0, hasTactilePaving: true, instruction: 'Take the west corridor 28 meters to Block 34 Backup Lift A.' },
        { from: 'b34_lift_b', to: 'b34_ai_lab_f1', timeSec: 40, distanceMeters: 20, stepCount: 0, hasTactilePaving: true, liftId: 'b34_lift_b', instruction: 'Ride Lift B to Floor 1 and enter AI Lab (Room 104).' },
        { from: 'b34_lift_a', to: 'b34_ai_lab_f1', timeSec: 50, distanceMeters: 30, stepCount: 0, hasTactilePaving: true, liftId: 'b34_lift_a', instruction: 'Ride Backup Lift A to Floor 1 and follow the wide corridor to AI Lab.' },
        { from: 'central_courtyard', to: 'b33_food_court', timeSec: 50, distanceMeters: 40, stepCount: 0, hasTactilePaving: true, instruction: 'Turn right onto the gently sloped courtyard path south to Block 33 Central Food Court.' },
        { from: 'b33_food_court', to: 'b33_washroom_g', timeSec: 25, distanceMeters: 18, stepCount: 0, hasTactilePaving: true, instruction: 'Follow the east dining aisle past the juice counter to the Accessible Washroom.' },
        { from: 'b33_washroom_g', to: 'b33_medical_room', timeSec: 22, distanceMeters: 16, stepCount: 0, hasTactilePaving: true, instruction: 'Continue 16 meters along the quiet corridor to the Campus Medical Room.' },
        { from: 'north_walkway', to: 'lib_ramp_entry', timeSec: 45, distanceMeters: 35, stepCount: 0, hasTactilePaving: true, instruction: 'Ascend the covered Central Library West Ramp to automatic glass doors.' },
        { from: 'north_walkway', to: 'lib_steps_entry', timeSec: 25, distanceMeters: 20, stepCount: 16, hasTactilePaving: false, instruction: 'Climb the 16 stone steps at the Central Library main entrance.' },
        { from: 'north_walkway', to: 'lib_tuck_shop', timeSec: 30, distanceMeters: 24, stepCount: 0, hasTactilePaving: true, instruction: 'Turn right under the covered breezeway to Library Tuck Shop.' },
        { from: 'lib_ramp_entry', to: 'lib_ground_hall', timeSec: 25, distanceMeters: 20, stepCount: 0, hasTactilePaving: true, instruction: 'Enter through motion-sensor glass doors into Central Library Reading Hall.' },
        { from: 'lib_steps_entry', to: 'lib_ground_hall', timeSec: 15, distanceMeters: 12, stepCount: 0, hasTactilePaving: false, instruction: 'Walk straight into Central Library Reading Hall.' },
        { from: 'lib_ground_hall', to: 'lib_water_station', timeSec: 20, distanceMeters: 15, stepCount: 0, hasTactilePaving: true, instruction: 'Walk 15 meters along the carpeted aisle to the Hydration Lounge.' },
        { from: 'lib_ground_hall', to: 'lib_washroom_g', timeSec: 25, distanceMeters: 20, stepCount: 0, hasTactilePaving: true, instruction: 'Pass behind the main reference desk to Central Library Accessible Washroom.' },
        { from: 'lib_ground_hall', to: 'lib_food_court', timeSec: 45, distanceMeters: 25, stepCount: 0, hasTactilePaving: true, instruction: 'Take Central Library Lift to Floor 1 for Terrace Cafe & Mini Food Court.' },
        { from: 'north_walkway', to: 'b38_ramp_entry', timeSec: 50, distanceMeters: 42, stepCount: 0, hasTactilePaving: true, instruction: 'Turn right onto the south tactile path toward Block 38 East Accessible Ramp.' },
        { from: 'b38_ramp_entry', to: 'b38_dsw_lobby', timeSec: 25, distanceMeters: 20, stepCount: 0, hasTactilePaving: true, instruction: 'Go straight up the step-free ramp into Block 38 DSW & Uni-Mall Lobby.' }
      ];

      // Build undirected graph
      const GRAPH = {};
      Object.keys(CAMPUS_NODES).forEach((id) => { GRAPH[id] = []; });
      CAMPUS_EDGES.forEach((edge) => {
        GRAPH[edge.from].push({ ...edge });
        const revNode = CAMPUS_NODES[edge.from];
        GRAPH[edge.to].push({
          from: edge.to,
          to: edge.from,
          timeSec: edge.timeSec,
          distanceMeters: edge.distanceMeters,
          stepCount: edge.stepCount,
          hasTactilePaving: edge.hasTactilePaving,
          liftId: edge.liftId || null,
          instruction: `Head toward ${revNode.name} (${revNode.building}).`
        });
      });

      // Compute geometric Left / Right / Straight turn direction between consecutive points
      function computeTurnDirection(prevPt, currPt, nextPt) {
        if (!prevPt || !currPt || !nextPt) return { label: 'Go Straight', icon: '⬆️', spoken: 'Continue straight ahead' };
        const v1x = currPt.x - prevPt.x;
        const v1y = currPt.y - prevPt.y;
        const v2x = nextPt.x - currPt.x;
        const v2y = nextPt.y - currPt.y;
        const cross = v1x * v2y - v1y * v2x;
        const dot = v1x * v2x + v1y * v2y;
        const angleDeg = Math.atan2(cross, dot) * (180 / Math.PI);

        if (angleDeg > 28) return { label: 'Turn Right', icon: '➡️', spoken: 'Turn right' };
        if (angleDeg < -28) return { label: 'Turn Left', icon: '⬅️', spoken: 'Turn left' };
        return { label: 'Go Straight', icon: '⬆️', spoken: 'Continue straight' };
      }

      // 3. DIJKSTRA ACCESSIBLE ROUTE ENGINE
      function findAccessibleRoute(startId, endId, { requireStepFree = true, preferTactile = false, brokenLiftIds = [] } = {}) {
        if (!CAMPUS_NODES[startId] || !CAMPUS_NODES[endId]) return null;
        const brokenSet = new Set(brokenLiftIds);
        const costs = {};
        const prev = {};
        const visited = new Set();

        Object.keys(CAMPUS_NODES).forEach((id) => { costs[id] = Infinity; prev[id] = null; });
        costs[startId] = 0;

        while (visited.size < Object.keys(CAMPUS_NODES).length) {
          let curr = null;
          let minCost = Infinity;
          for (const id of Object.keys(costs)) {
            if (!visited.has(id) && costs[id] < minCost) {
              minCost = costs[id];
              curr = id;
            }
          }
          if (!curr || curr === endId) break;
          visited.add(curr);

          for (const edge of GRAPH[curr] || []) {
            const target = CAMPUS_NODES[edge.to];
            if (requireStepFree && (edge.stepCount > 0 || !target.isStepFreeEntry)) continue;
            if (brokenSet.has(edge.to) || (edge.liftId && brokenSet.has(edge.liftId))) continue;
            const tactilePenalty = preferTactile && !edge.hasTactilePaving ? 45 : 0;
            const candidate = costs[curr] + edge.timeSec + tactilePenalty;
            if (candidate < costs[edge.to]) {
              costs[edge.to] = candidate;
              prev[edge.to] = { from: curr, edge };
            }
          }
        }

        if (costs[endId] === Infinity) return null;

        const pathNodes = [];
        const steps = [];
        let totalTimeSec = 0;
        let totalDistanceMeters = 0;
        let totalSteps = 0;
        let usesLift = false;
        let usesRamp = false;

        let cursor = endId;
        while (cursor) {
          const node = CAMPUS_NODES[cursor];
          pathNodes.unshift(node);
          if (node.type === 'lift') usesLift = true;
          if (node.type === 'ramp') usesRamp = true;

          const rec = prev[cursor];
          if (rec) {
            totalTimeSec += rec.edge.timeSec;
            totalDistanceMeters += rec.edge.distanceMeters;
            totalSteps += rec.edge.stepCount;
            if (rec.edge.liftId) usesLift = true;

            steps.unshift({
              nodeId: node.id,
              landmark: node.name,
              floor: node.floor,
              building: node.building,
              stepMeters: rec.edge.distanceMeters,
              stepSec: rec.edge.timeSec,
              distance: `${rec.edge.distanceMeters}m (~${rec.edge.timeSec}s)`,
              standardInstruction: rec.edge.instruction,
              sensoryLandmark: node.sensoryLandmark
            });
            cursor = rec.from;
          } else {
            cursor = null;
          }
        }

        // Attach computed Left / Right / Straight turn cues to each step
        steps.forEach((st, idx) => {
          const pPrev = pathNodes[idx - 1] ? pathNodes[idx - 1].coords : null;
          const pCurr = pathNodes[idx] ? pathNodes[idx].coords : null;
          const pNext = pathNodes[idx + 1] ? pathNodes[idx + 1].coords : null;
          st.turn = computeTurnDirection(pPrev, pCurr, pNext);
        });

        if (steps.length === 0) {
          const only = CAMPUS_NODES[endId];
          steps.push({
            nodeId: only.id,
            landmark: only.name,
            floor: only.floor,
            building: only.building,
            stepMeters: 0,
            stepSec: 0,
            distance: '0m',
            turn: { label: 'Arrived', icon: '✅', spoken: 'You are here' },
            standardInstruction: `You are already at ${only.name}.`,
            sensoryLandmark: only.sensoryLandmark
          });
        }

        return {
          start: CAMPUS_NODES[startId],
          destination: CAMPUS_NODES[endId],
          isStepFree: totalSteps === 0,
          estimatedMinutes: Math.max(1, Math.ceil(totalTimeSec / 60)),
          totalTimeSec,
          totalDistanceMeters,
          totalSteps,
          badges: [
            totalSteps === 0 ? 'No Stairs' : `${totalSteps} Steps`,
            usesRamp ? 'Ramp' : null,
            usesLift ? 'Lift' : null
          ].filter(Boolean),
          pathNodeIds: pathNodes.map((n) => n.id),
          steps
        };
      }

      // 4. FIND NEAREST DAILY ESSENTIALS
      function findNearestEssentials(currentNodeId, category, requireStepFree = true, brokenLiftIds = []) {
        return Object.values(CAMPUS_NODES)
          .filter((n) => n.type === category && n.id !== currentNodeId && (!requireStepFree || n.isStepFreeEntry))
          .map((facility) => {
            const route = findAccessibleRoute(currentNodeId, facility.id, {
              requireStepFree,
              preferTactile: true,
              brokenLiftIds
            });
            if (!route) return null;
            return {
              ...facility,
              travelTimeSec: route.totalTimeSec,
              estimatedMinutes: route.estimatedMinutes,
              distanceMeters: route.totalDistanceMeters,
              badges: route.badges,
              route
            };
          })
          .filter(Boolean)
          .sort((a, b) => a.travelTimeSec - b.travelTimeSec);
      }

      // 5. APPLICATION STATE
      const state = {
        screen: 'planner',
        mobilityProfile: 'wheelchair',
        voiceLang: 'auto',
        talkBackMode: true,
        autoSpeak: true,
        sourceId: 'main_gate_plaza',
        destId: 'b38_dsw_lobby',
        selectedCategory: 'food_court',
        selectedRouteType: 'step-free',
        currentStepIndex: 0,
        isLiveGuiding: false,
        brokenLiftIds: [],
        activeFloor: 'Outdoor',
        mapZoom: 1,
        showMap: true,
        isListening: false,
        continuousVoice: false,
        lastSpokenCommand: ''
      };

      let liveRouteTimer = null;
      let glideAnimFrame = null;
      let activeRecognition = null;
      let voiceSessionCounter = 0;

      const SELECTABLE_LOCATIONS = Object.values(CAMPUS_NODES).filter(
        (n) => !['ramp', 'stairs', 'lift', 'pathway'].includes(n.type)
      );

      // 6. REAL GOOGLE MAPS EXTERNAL LAUNCHER
      const toSel = document.getElementById('select-dest');

      function openGoogleNavigation(destinationId) {
        const destNode = CAMPUS_NODES[destinationId] || CAMPUS_NODES[state.destId];
        const srcNode = CAMPUS_NODES[state.sourceId];
        const destCoords = destNode && destNode.gps ? destNode.gps : '31.2554,75.7049';
        const originCoords = srcNode && srcNode.gps ? srcNode.gps : '31.2536,75.7037';
        const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originCoords)}&destination=${encodeURIComponent(destCoords)}&travelmode=walking`;
        announce(`Opening Google Maps walking directions to ${destNode ? destNode.name : 'Lovely Professional University'}.`, true);
        window.open(url, '_blank', 'noopener,noreferrer');
      }

      document.getElementById('googleNavBtn').onclick = () => {
        const destination = toSel.value;
        openGoogleNavigation(destination);
      };

      // 7. MULTILINGUAL SPEECH & TALKBACK ENGINE
      function detectSpeechLang(text) {
        if (state.voiceLang !== 'auto') return state.voiceLang;
        if (/[\u0A00-\u0A7F]/.test(text)) return 'pa-IN';
        if (/[\u0900-\u097F]/.test(text)) return 'hi-IN';
        const lower = text.toLowerCase();
        if (/\b(kahan|jana|chalo|agla|pichla|kharab|khana|paani|shuru|batao|se|kitni|door)\b/.test(lower)) return 'hi-IN';
        if (/\b(kithe|jaana|aggla|pichhla|kharab|paani|khana|daso|ton)\b/.test(lower)) return 'pa-IN';
        return 'en-IN';
      }

      function announce(message, forceSpeak = false, explicitLang = null) {
        if (!message) return;
        const liveEl = document.getElementById('aria-live-region');
        liveEl.textContent = '';
        setTimeout(() => { liveEl.textContent = message; }, 35);

        if ((state.autoSpeak || forceSpeak) && 'speechSynthesis' in window) {
          try {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(message);
            const lang = explicitLang || detectSpeechLang(message);
            utterance.lang = lang;
            utterance.rate = 0.95;
            const voices = window.speechSynthesis.getVoices() || [];
            const match =
              voices.find((v) => v.lang && v.lang.toLowerCase() === lang.toLowerCase()) ||
              voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(lang.split('-')[0])) ||
              voices[0];
            if (match) utterance.voice = match;
            window.speechSynthesis.speak(utterance);
          } catch (e) {
            // Safe fallback if speech synthesis is blocked
          }
        }
      }

      // TalkBack Focus & Tap Reader
      document.addEventListener('focusin', (e) => {
        if (!state.talkBackMode) return;
        const el = e.target;
        if (!el || !['BUTTON', 'SELECT', 'INPUT'].includes(el.tagName)) return;
        const label = el.getAttribute('aria-label') || el.innerText.trim();
        if (label) announce(label, true);
      });

      // Helper to match a location or category inside a phrase segment
      const CATEGORY_MATCHERS = [
        { type: 'food_court', regex: /(food court|food|canteen|lunch|coffee|khana|खाना|ਖਾਣਾ)/i, hi: 'फ़ूड कोर्ट', pa: 'ਫੂਡ ਕੋਰਟ' },
        { type: 'tuck_shop', regex: /(tuck shop|tuck|shop|print|stationery|dukan|दुकान|ਦੁਕਾਨ)/i, hi: 'टक शॉप', pa: 'ਟੱਕ ਸ਼ਾਪ' },
        { type: 'washroom_accessible', regex: /(washroom|toilet|restroom|bathroom|वॉशरूम|ਬਾਥਰੂਮ)/i, hi: 'वॉशरूम', pa: 'ਵਾਸ਼ਰੂਮ' },
        { type: 'water_station', regex: /(water|drink|seat|rest|paani|पानी|ਪਾਣੀ)/i, hi: 'पीने का पानी', pa: 'ਪੀਣ ਵਾਲਾ ਪਾਣੀ' },
        { type: 'medical_room', regex: /(medical|doctor|first aid|hospital|मेडिकल|ਮੈਡੀਕਲ)/i, hi: 'मेडिकल रूम', pa: 'ਮੈਡੀਕਲ ਰੂਮ' }
      ];

      function findBestLocationInPhrase(phrase, excludeId = null) {
        if (!phrase) return null;
        const clean = phrase.toLowerCase().replace(/[^a-z0-9\u0900-\u097F\u0A00-\u0A7F\s]/g, ' ').replace(/\s+/g, ' ').trim();
        let bestMatch = null;
        let longestKeywordLen = 0;

        SELECTABLE_LOCATIONS.forEach((loc) => {
          if (excludeId && loc.id === excludeId) return;
          for (const kw of loc.keywords) {
            const normKw = kw.toLowerCase().trim();
            if (clean.includes(normKw) && normKw.length > longestKeywordLen) {
              longestKeywordLen = normKw.length;
              bestMatch = loc;
            }
          }
        });
        return bestMatch;
      }

      function findCategoryInPhrase(phrase) {
        if (!phrase) return null;
        for (const cat of CATEGORY_MATCHERS) {
          if (cat.regex.test(phrase)) return cat;
        }
        return null;
      }

      // Parse spoken phrase for BOTH Current Spot (source) and Destination (target)
      function parseSpokenLocations(text) {
        const lower = text.toLowerCase().trim();
        let detectedSource = null;
        let detectedDest = null;
        let detectedCategory = null;

        // 1. English "from <source> to <dest>" or "<source> to <dest>"
        const enFromTo = lower.match(/(?:\bfrom\s+)?(.+?)\s+\bto\s+(.+)/i);
        // 2. Hindi / Punjabi "<source> se/ton <dest>"
        const hiFromTo = lower.match(/(.+?)\s+(?:se|ton|से|ਤੋਂ)\s+(.+)/i);
        // 3. Explicit "current spot <source> destination <dest>"
        const explicitPair = lower.match(/(?:current spot|start|location)\s+(.+?)\s+(?:destination|target|end)\s+(.+)/i);

        if (explicitPair) {
          detectedSource = findBestLocationInPhrase(explicitPair[1]);
          const destPart = explicitPair[2];
          detectedDest = findBestLocationInPhrase(destPart, detectedSource ? detectedSource.id : null);
          if (!detectedDest) detectedCategory = findCategoryInPhrase(destPart);
        } else if (enFromTo) {
          const possibleSrc = findBestLocationInPhrase(enFromTo[1]);
          if (possibleSrc || /\bfrom\b/i.test(lower)) {
            detectedSource = possibleSrc;
            const destPart = enFromTo[2];
            detectedDest = findBestLocationInPhrase(destPart, detectedSource ? detectedSource.id : null);
            if (!detectedDest) detectedCategory = findCategoryInPhrase(destPart);
          } else {
            detectedDest = findBestLocationInPhrase(lower);
            if (!detectedDest) detectedCategory = findCategoryInPhrase(lower);
          }
        } else if (hiFromTo) {
          detectedSource = findBestLocationInPhrase(hiFromTo[1]);
          const destPart = hiFromTo[2];
          detectedDest = findBestLocationInPhrase(destPart, detectedSource ? detectedSource.id : null);
          if (!detectedDest) detectedCategory = findCategoryInPhrase(destPart);
        } else {
          // 4. Only current spot spoken: "I am at <source>" / "Current spot <source>"
          const atMatch = lower.match(/\b(?:i am at|currently at|current spot|main hoon|mein hoon)\s+(.+)/i);
          if (atMatch) {
            detectedSource = findBestLocationInPhrase(atMatch[1]);
          } else {
            // 5. Single destination / category spoken (e.g. "Block 38", "Central Library", or "Food court jana hai")
            detectedDest = findBestLocationInPhrase(lower);
            if (!detectedDest) {
              detectedCategory = findCategoryInPhrase(lower);
            }
          }
        }

        return { detectedSource, detectedDest, detectedCategory };
      }

      function getRemainingDistanceMeters(route, stepIndex, isStarted) {
        if (!route || !route.steps) return 0;
        if (!isStarted && stepIndex === 0) return route.totalDistanceMeters;
        let left = 0;
        for (let i = stepIndex + 1; i < route.steps.length; i++) {
          left += route.steps[i].stepMeters || 0;
        }
        return left;
      }

      function showSpokenSyncStatus(spokenText, sourceNode, destNode, warningText = null) {
        state.lastSpokenCommand = spokenText;
        const feedbackBox = document.getElementById('voice-feedback-box');
        if (feedbackBox) {
          feedbackBox.innerHTML = `
            <div class="text-xs text-zinc-300">🎙️ Spoken: <span class="text-white font-extrabold">"${spokenText}"</span></div>
            <div class="text-xs text-[#4ADE80]">📍 Current Spot: <span class="text-white">${sourceNode.name}</span></div>
            <div class="text-xs text-[#FACC15]">🏁 Destination: <span class="text-white">${destNode.name}</span></div>
            ${warningText ? `<div class="text-xs text-[#F87171] font-extrabold pt-1">⚠️ ${warningText}</div>` : ''}
          `;
          feedbackBox.classList.remove('hidden');
        }
        const navPill = document.getElementById('nav-spoken-command-pill');
        if (navPill) {
          navPill.textContent = `🎙️ "${spokenText}"`;
          navPill.classList.remove('hidden');
        }
      }

      // 8. MULTILINGUAL VOICE COMMAND INTERPRETER (ALWAYS RE-ROUTES & DISPLAYS MAP FOR ANY NUMBER OF SPOKEN COMMANDS)
      function executeVoiceCommand(rawText) {
        const text = rawText.trim();
        if (!text) return;
        const lower = text.toLowerCase();
        const replyLang = detectSpeechLang(text);

        // Always stop any active auto-timer or stale speech before executing a new command
        stopLiveGuidedJourney(false);
        if ('speechSynthesis' in window) {
          try { window.speechSynthesis.cancel(); } catch (e) {}
        }

        const feedbackBox = document.getElementById('voice-feedback-box');
        feedbackBox.textContent = `🎙️ Heard: "${text}"`;
        feedbackBox.classList.remove('hidden');

        const routes = computeRoutes();
        const activeRoute = state.selectedRouteType === 'fastest' ? routes.fastest : routes.stepFree;

        // Check Remaining Distance via Voice
        if (/(distance left|how far|kitni door|baki|कितनी दूर|दूरी)/i.test(lower)) {
          const leftM = getRemainingDistanceMeters(activeRoute, state.currentStepIndex, state.isLiveGuiding || state.currentStepIndex > 0);
          const msg =
            replyLang === 'hi-IN'
              ? `मंज़िल तक ${leftM} मीटर की दूरी बाकी है।`
              : `You have ${leftM} meters remaining to reach ${CAMPUS_NODES[state.destId].name}.`;
          announce(msg, true, replyLang);
          return;
        }

        // Start / Begin Live Route on Map via Voice!
        if (/^(start route|start navigation|start|begin|chalo|shuru|शुरू|ਚੱਲੋ)$/i.test(lower)) {
          prepareRouteOnMap(state.mobilityProfile === 'standard' ? 'fastest' : 'step-free', false);
          startLiveGuidedJourney();
          return;
        }

        // Pause Live Route
        if (/(pause|stop|ruko|रोको|ਰੁਕੋ)/i.test(lower)) {
          stopLiveGuidedJourney(true);
          announce('Route guidance paused.', true, replyLang);
          return;
        }

        // Map Zoom, Floor Switch & Map Audio Description Voice Controls
        if (/(zoom in|bada karo|ज़ूम इन|ਜ਼ੂਮ ਇਨ)/i.test(lower)) {
          state.mapZoom = Math.min(1.6, +(state.mapZoom + 0.2).toFixed(1));
          applyMapZoom();
          announce(replyLang === 'hi-IN' ? 'मैप ज़ूम इन किया गया है।' : 'Map zoomed in.', true, replyLang);
          return;
        }
        if (/(zoom out|chota karo|ज़ूम आउट|ਜ਼ੂਮ ਆਉਟ)/i.test(lower)) {
          state.mapZoom = Math.max(0.8, +(state.mapZoom - 0.2).toFixed(1));
          applyMapZoom();
          announce(replyLang === 'hi-IN' ? 'मैप ज़ूम आउट किया गया है।' : 'Map zoomed out.', true, replyLang);
          return;
        }
        if (/(describe map|map batao|where am i|kahan hoon|मैप बताओ|मैं कहाँ हूँ|ਮੈਪ ਦੱਸੋ)/i.test(lower)) {
          describeMapAloud(replyLang);
          return;
        }
        if (/(floor 1|first floor|pehli manzil|पहली मंजिल)/i.test(lower)) {
          switchFloor('Floor 1');
          return;
        }
        if (/(ground floor|ground|neeche|ग्राउंड फ्लोर)/i.test(lower)) {
          switchFloor('Ground');
          return;
        }
        if (/(outdoor|bahar|बाहर)/i.test(lower)) {
          switchFloor('Outdoor');
          return;
        }

        // Next / Previous / Repeat
        if (/^(next|next step|agla|agla step|aage|aggla|अगला|ਅੱਗੇ)$/i.test(lower)) {
          if (state.screen === 'navigation') {
            handleNextStep();
          } else {
            prepareRouteOnMap(state.mobilityProfile === 'standard' ? 'fastest' : 'step-free', true, replyLang);
          }
          return;
        }
        if (/^(previous|back|pichla|peeche|पिछला|ਪਿੱਛੇ)$/i.test(lower)) {
          if (state.screen === 'navigation') handlePrevStep();
          return;
        }
        if (/(repeat|dobara|batao|दोबारा|ਦੁਬਾਰਾ)/i.test(lower)) {
          if (state.screen === 'navigation') {
            const step = activeRoute.steps[state.currentStepIndex];
            const leftM = getRemainingDistanceMeters(activeRoute, state.currentStepIndex, true);
            announce(formatFullStepNarration(step, state.currentStepIndex, activeRoute.steps.length, leftM, replyLang), true, replyLang);
          } else {
            announce(`You are at ${CAMPUS_NODES[state.sourceId].shortName}, destination ${CAMPUS_NODES[state.destId].shortName}.`, true, replyLang);
          }
          return;
        }

        // Broken Lift / Way Blocked Hazard Warning
        if (/(broken|lift kharab|lift not working|not working|kharab|blocked|खराब|ਲਿਫਟ ਖਰਾਬ)/i.test(lower)) {
          triggerBrokenLiftDemo('Lift is Not Working — Way Blocked!');
          return;
        }

        // Gate QR
        if (/(qr|scan|स्कैन)/i.test(lower)) {
          triggerGateQrDemo();
          return;
        }

        // Parse Spoken Current Spot & Destination (even if user already spoke a previous destination!)
        const { detectedSource, detectedDest, detectedCategory } = parseSpokenLocations(text);

        if (detectedSource) {
          state.sourceId = detectedSource.id;
        }

        // If user only updated current spot without a destination
        if (detectedSource && !detectedDest && !detectedCategory) {
          populateDropdowns();
          renderAll(false);
          showSpokenSyncStatus(text, CAMPUS_NODES[state.sourceId], CAMPUS_NODES[state.destId]);
          announce(`Current spot updated to ${detectedSource.name}. Where would you like to go?`, true, replyLang);
          return;
        }

        // Resolve Destination from Category -> Sync Dropdowns, Reroute & Display Map Again!
        if (detectedCategory) {
          const matches = findNearestEssentials(
            state.sourceId,
            detectedCategory.type,
            state.mobilityProfile !== 'standard',
            state.brokenLiftIds
          );
          if (matches.length > 0) {
            const best = matches[0];
            state.destId = best.id;
            state.selectedCategory = detectedCategory.type;
            state.activeFloor = best.floor;
            populateDropdowns();
            showSpokenSyncStatus(text, CAMPUS_NODES[state.sourceId], best);
            prepareRouteOnMap(state.mobilityProfile === 'standard' ? 'fastest' : 'step-free', false);
            const msg =
              replyLang === 'hi-IN'
                ? `${CAMPUS_NODES[state.sourceId].shortName} से ${best.shortName} का नया रास्ता मैप पर सेट है। कुल दूरी ${best.distanceMeters} मीटर है। शुरू करने के लिए स्टार्ट बटन दबाएं।`
                : replyLang === 'pa-IN'
                ? `${CAMPUS_NODES[state.sourceId].shortName} ਤੋਂ ${best.shortName} ਦਾ ਰਸਤਾ ਮੈਪ ਤੇ ਸੈੱਟ ਹੈ। ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਸਟਾਰਟ ਬਟਨ ਦਬਾਓ।`
                : `Rerouted on map from ${CAMPUS_NODES[state.sourceId].shortName} to ${best.shortName}, ${best.distanceMeters} meters left. Tap Start Route or say Start to begin.`;
            announce(msg, true, replyLang);
            return;
          }
        }

        // Resolve Direct Building / Landmark Destination -> Sync Dropdowns, Reroute & Display Map Again!
        if (detectedDest) {
          if (detectedDest.id === state.sourceId) {
            const alt = SELECTABLE_LOCATIONS.find((l) => l.id !== detectedDest.id);
            if (alt) state.sourceId = alt.id;
          }
          state.destId = detectedDest.id;
          state.activeFloor = detectedDest.floor;
          populateDropdowns();
          showSpokenSyncStatus(text, CAMPUS_NODES[state.sourceId], detectedDest);
          prepareRouteOnMap(state.mobilityProfile === 'standard' ? 'fastest' : 'step-free', true, replyLang);
          return;
        }

        // If location name was not recognized, show clear feedback without pretending it matched
        feedbackBox.innerHTML = `
          <div class="text-xs text-zinc-300">🎙️ Spoken: <span class="text-white font-extrabold">"${text}"</span></div>
          <div class="text-xs text-[#F87171]">⚠️ Location not matched. Try: "Main Gate to Block 38", "Block 34", "Block 33", or "Central Library".</div>
        `;
        announce(
          replyLang === 'hi-IN'
            ? `मैंने "${text}" सुना। बोलें: मेन गेट से ब्लॉक 38, सेंट्रल लाइब्रेरी, फ़ूड कोर्ट, या वॉशरूम।`
            : `Heard "${text}". Try saying From Main Gate to Block 38, Central Library, Food Court, or Washroom.`,
          true,
          replyLang
        );
      }

      // SpeechRecognition Controller — Fresh instance & clean lifecycle on every single trigger
      function stopActiveRecognition() {
        if (activeRecognition) {
          try {
            activeRecognition.onstart = null;
            activeRecognition.onresult = null;
            activeRecognition.onerror = null;
            activeRecognition.onend = null;
            activeRecognition.abort();
          } catch (e) {}
          activeRecognition = null;
        }
        state.isListening = false;
        updateMicUI();
      }

      function toggleVoiceRecognition(forceContinuous = false) {
        const SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
        const feedbackBox = document.getElementById('voice-feedback-box');

        if (!SpeechAPI) {
          feedbackBox.textContent = 'Browser mic unavailable here — use the quick voice command chips above!';
          feedbackBox.classList.remove('hidden');
          announce(feedbackBox.textContent, true);
          return;
        }

        if (state.isListening && !forceContinuous) {
          state.continuousVoice = false;
          stopActiveRecognition();
          return;
        }

        // Stop any previous speech or recognition session before starting a fresh one
        if ('speechSynthesis' in window) {
          try { window.speechSynthesis.cancel(); } catch (e) {}
        }
        stopActiveRecognition();

        const sessionId = ++voiceSessionCounter;
        let latestTranscript = '';
        let commandHandledThisSession = false;

        try {
          const rec = new SpeechAPI();
          activeRecognition = rec;
          rec.lang = state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang;
          rec.interimResults = true;
          rec.maxAlternatives = 3;
          rec.continuous = false;

          rec.onstart = () => {
            if (sessionId !== voiceSessionCounter) return;
            state.isListening = true;
            updateMicUI();
          };

          rec.onresult = (event) => {
            if (sessionId !== voiceSessionCounter) return;
            let finalStr = '';
            let interimStr = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
              const t = event.results[i][0].transcript;
              if (event.results[i].isFinal) finalStr += t;
              else interimStr += t;
            }
            const combined = (finalStr || interimStr).trim();
            if (combined) {
              latestTranscript = combined;
              feedbackBox.textContent = `🎙️ Listening: "${combined}"`;
              feedbackBox.classList.remove('hidden');
            }
            if (finalStr.trim() && !commandHandledThisSession) {
              commandHandledThisSession = true;
              executeVoiceCommand(finalStr.trim());
            }
          };

          rec.onerror = () => {
            if (sessionId !== voiceSessionCounter) return;
            stopActiveRecognition();
            if (!commandHandledThisSession && latestTranscript) {
              commandHandledThisSession = true;
              executeVoiceCommand(latestTranscript);
            } else if (!state.continuousVoice) {
              feedbackBox.textContent = 'Mic blocked or no speech detected — speak again or tap any quick voice command button above!';
              feedbackBox.classList.remove('hidden');
            }
          };

          rec.onend = () => {
            if (sessionId !== voiceSessionCounter) return;
            stopActiveRecognition();
            if (!commandHandledThisSession && latestTranscript) {
              commandHandledThisSession = true;
              executeVoiceCommand(latestTranscript);
            }
            if (state.continuousVoice && sessionId === voiceSessionCounter) {
              setTimeout(() => {
                if (state.continuousVoice && !state.isListening && sessionId === voiceSessionCounter) {
                  toggleVoiceRecognition(true);
                }
              }, 900);
            }
          };

          rec.start();
        } catch (err) {
          stopActiveRecognition();
          feedbackBox.textContent = 'Mic unavailable — tap any quick voice command button above!';
          feedbackBox.classList.remove('hidden');
        }
      }

      function updateMicUI() {
        const micBtn = document.getElementById('btn-voice-mic');
        const micLabel = document.getElementById('mic-label');
        const navVoiceBtn = document.getElementById('btn-nav-voice');
        const hfBtn = document.getElementById('btn-handsfree');
        if (state.isListening) {
          micBtn.className = 'flex-1 min-h-[64px] px-4 py-3 rounded-2xl border-2 bg-[#DC2626] border-[#FCA5A5] text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-md animate-pulse';
          micLabel.textContent = 'Listening... Speak Now';
          if (navVoiceBtn) navVoiceBtn.textContent = '🔴 Listening... Speak New Destination';
        } else {
          micBtn.className = 'flex-1 min-h-[64px] px-4 py-3 rounded-2xl border-2 bg-[#38BDF8] border-[#7DD3FC] text-black font-extrabold text-base flex items-center justify-center gap-2 shadow-md';
          micLabel.textContent = 'Speak in Any Language';
          if (navVoiceBtn) navVoiceBtn.textContent = '🎙️ Speak New Destination or Command';
        }
        hfBtn.className = state.continuousVoice
          ? 'min-h-[64px] px-3 rounded-2xl border-2 bg-[#4ADE80] border-[#86EFAC] text-black font-extrabold text-xs flex flex-col items-center justify-center shrink-0'
          : 'min-h-[64px] px-3 rounded-2xl border-2 bg-black border-zinc-600 text-zinc-200 font-extrabold text-xs flex flex-col items-center justify-center shrink-0';
      }

      // 9. COMPUTE ROUTES & RENDER UI
      function computeRoutes() {
        const preferTactile = state.mobilityProfile === 'blind';
        const stepFree =
          findAccessibleRoute(state.sourceId, state.destId, {
            requireStepFree: true,
            preferTactile,
            brokenLiftIds: state.brokenLiftIds
          }) ||
          findAccessibleRoute(state.sourceId, state.destId, {
            requireStepFree: true,
            preferTactile: false,
            brokenLiftIds: []
          });

        const fastest =
          findAccessibleRoute(state.sourceId, state.destId, {
            requireStepFree: false,
            preferTactile: false,
            brokenLiftIds: state.brokenLiftIds
          }) || stepFree;

        return { stepFree, fastest };
      }

      function populateDropdowns() {
        const srcEl = document.getElementById('select-source');
        const dstEl = document.getElementById('select-dest');
        srcEl.innerHTML = '';
        dstEl.innerHTML = '';

        SELECTABLE_LOCATIONS.forEach((loc) => {
          const opt1 = document.createElement('option');
          opt1.value = loc.id;
          opt1.textContent = `${loc.name} (${loc.floor})`;
          if (loc.id === state.sourceId) opt1.selected = true;
          srcEl.appendChild(opt1);

          const opt2 = document.createElement('option');
          opt2.value = loc.id;
          opt2.textContent = `${loc.name} (${loc.floor})`;
          if (loc.id === state.destId) opt2.selected = true;
          dstEl.appendChild(opt2);
        });

        srcEl.value = state.sourceId;
        dstEl.value = state.destId;
      }

      function renderEssentialsList() {
        const listEl = document.getElementById('essentials-list');
        const results = findNearestEssentials(
          state.sourceId,
          state.selectedCategory,
          state.mobilityProfile !== 'standard',
          state.brokenLiftIds
        );

        listEl.innerHTML = '';
        if (results.length === 0) {
          listEl.innerHTML = '<p class="text-xs text-zinc-400 py-2">No matching spots found.</p>';
          return;
        }

        results.forEach((item) => {
          const card = document.createElement('div');
          card.className = 'rounded-2xl bg-black border border-zinc-800 p-3 flex items-center justify-between gap-2';
          card.innerHTML = `
            <div class="min-w-0">
              <p class="text-sm font-extrabold text-white truncate">${item.name}</p>
              <p class="text-xs font-bold text-[#4ADE80]">
                ${item.estimatedMinutes} min • ${item.distanceMeters}m • ${item.floor}
              </p>
              <p class="text-[11px] text-zinc-400 truncate mt-0.5">${item.sensoryLandmark}</p>
            </div>
            <button
              type="button"
              aria-label="Open map route to ${item.name}, ${item.estimatedMinutes} minutes away"
              class="min-h-[48px] px-4 rounded-xl bg-[#4ADE80] text-black font-extrabold text-xs shrink-0"
            >
              View Map →
            </button>
          `;
          card.querySelector('button').addEventListener('click', () => {
            state.destId = item.id;
            state.activeFloor = item.floor;
            populateDropdowns();
            prepareRouteOnMap('step-free', true);
          });
          listEl.appendChild(card);
        });
      }

      function renderRouteCards() {
        const container = document.getElementById('route-cards-container');
        if (!container) return;
        const { stepFree, fastest } = computeRoutes();
        container.innerHTML = '';

        const cards = [
          {
            type: 'step-free',
            title: '♿ Step-Free Route',
            subtitle: 'Recommended • Zero Stairs',
            route: stepFree,
            accentClass: 'border-[#4ADE80]',
            btnClass: 'bg-[#4ADE80] text-black'
          },
          {
            type: 'fastest',
            title: '⚡ Fastest Route',
            subtitle: fastest.totalSteps > 0 ? `Includes ${fastest.totalSteps} steps` : 'Direct Step-Free',
            route: fastest,
            accentClass: 'border-[#38BDF8]',
            btnClass: 'bg-[#38BDF8] text-black'
          }
        ];

        cards.forEach((item) => {
          const card = document.createElement('div');
          card.className = `rounded-2xl bg-black border-2 ${item.accentClass} p-3.5 flex flex-col justify-between gap-3`;
          card.innerHTML = `
            <div class="space-y-1">
              <p class="text-sm font-extrabold text-white">${item.title}</p>
              <p class="text-xs font-semibold text-zinc-400">${item.subtitle}</p>
              <p class="text-xl font-black text-white pt-1">${item.route.estimatedMinutes} min <span class="text-xs font-bold text-zinc-400">(${item.route.totalDistanceMeters}m)</span></p>
              <div class="flex flex-wrap gap-1 pt-1">
                ${item.route.badges.map((b) => `<span class="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-700 text-[10px] font-extrabold text-zinc-200">${b}</span>`).join('')}
              </div>
            </div>
            <button
              type="button"
              aria-label="Open map for ${item.title}, ${item.route.estimatedMinutes} minutes"
              class="w-full min-h-[48px] px-3 py-2 rounded-xl ${item.btnClass} font-extrabold text-xs"
            >
              Open on Map →
            </button>
          `;
          card.querySelector('button').addEventListener('click', () => prepareRouteOnMap(item.type, true));
          container.appendChild(card);
        });
      }

      function applyMapZoom() {
        document
          .getElementById('map-viewport')
          .setAttribute('transform', `translate(${300 * (1 - state.mapZoom)}, ${150 * (1 - state.mapZoom)}) scale(${state.mapZoom})`);
      }

      function switchFloor(floorName) {
        state.activeFloor = floorName;
        document.querySelectorAll('.floor-btn').forEach((b) => {
          const active = b.dataset.floor === state.activeFloor;
          b.setAttribute('aria-selected', String(active));
          b.className = active
            ? 'floor-btn min-h-[48px] rounded-xl font-extrabold text-xs border bg-[#38BDF8] text-black border-[#38BDF8]'
            : 'floor-btn min-h-[48px] rounded-xl font-extrabold text-xs border bg-black text-zinc-300 border-zinc-700';
        });
        const floorInd = document.getElementById('nav-map-floor-indicator');
        if (floorInd) floorInd.textContent = `Floor: ${floorName}`;
        renderMap();
      }

      function describeMapAloud(lang = 'en-IN') {
        const routes = computeRoutes();
        const activeRoute = state.selectedRouteType === 'fastest' ? routes.fastest : routes.stepFree;
        const currentNodeId =
          state.screen === 'navigation'
            ? activeRoute.steps[state.currentStepIndex]?.nodeId || state.sourceId
            : state.sourceId;
        const currNode = CAMPUS_NODES[currentNodeId] || CAMPUS_NODES.b34_ground_lobby;
        const destNode = CAMPUS_NODES[state.destId];
        const leftM = getRemainingDistanceMeters(activeRoute, state.currentStepIndex, state.isLiveGuiding || state.currentStepIndex > 0);
        const pathSummary = activeRoute.steps.map((s) => `${s.turn ? s.turn.spoken + ' toward ' : ''}${s.landmark}`).join(', then ');

        const msg =
          lang === 'hi-IN'
            ? `मैप विवरण: आप अभी ${currNode.name}, ${currNode.floor} फ्लोर पर हैं। आपकी मंज़िल ${destNode.name} है, जो ${leftM} मीटर दूर है। पूरा रास्ता: ${pathSummary}।`
            : lang === 'pa-IN'
            ? `ਮੈਪ ਵੇਰਵਾ: ਤੁਸੀਂ ਇਸ ਵੇਲੇ ${currNode.name}, ${currNode.floor} ਫਲੋਰ ਤੇ ਹੋ। ਤੁਹਾਡੀ ਮੰਜ਼ਿਲ ${destNode.name} ਹੈ।`
            : `Map Overview: You are currently at ${currNode.name} on ${currNode.floor} floor. Your destination is ${destNode.name}, with ${leftM} meters left via ${pathSummary}.`;
        announce(msg, true, lang);
      }

      function formatFullStepNarration(step, idx, total, remainingMeters, lang = 'en-IN') {
        const turnPhrase = step.turn ? step.turn.spoken : 'Continue straight';
        if (lang === 'hi-IN') {
          return `कदम ${idx + 1} कुल ${total} में से। ${turnPhrase}। जगह: ${step.landmark}, ${step.floor} फ्लोर। निर्देश: ${step.standardInstruction}। पहचान चिन्ह: ${step.sensoryLandmark}। मंज़िल तक ${remainingMeters} मीटर बाकी हैं।`;
        }
        if (lang === 'pa-IN') {
          return `ਕਦਮ ${idx + 1} ਕੁੱਲ ${total} ਵਿੱਚੋਂ। ਸਥਾਨ: ${step.landmark}। ਨਿਰਦੇਸ਼: ${step.standardInstruction}। ਮੰਜ਼ਿਲ ਤੱਕ ${remainingMeters} ਮੀਟਰ ਬਾਕੀ ਹਨ।`;
        }
        return `Step ${idx + 1} of ${total}. ${turnPhrase} toward ${step.landmark} on ${step.floor} floor. ${step.standardInstruction}. Sensory landmark: ${step.sensoryLandmark}. ${remainingMeters} meters left to reach destination.`;
      }

      // Smoothly animate user dot along segment on SVG map (like Google Maps)
      function animateUserMarkerTo(targetCoords, durationMs = 950) {
        if (glideAnimFrame) cancelAnimationFrame(glideAnimFrame);
        const marker = document.getElementById('map-user-marker');
        if (!marker) return;
        const currentTransform = marker.getAttribute('transform') || '';
        const match = currentTransform.match(/translate\(([-\d.]+),\s*([-\d.]+)\)/);
        const startX = match ? parseFloat(match[1]) : targetCoords.x;
        const startY = match ? parseFloat(match[2]) : targetCoords.y;
        const startTime = performance.now();

        function stepAnim(now) {
          const progress = Math.min(1, (now - startTime) / durationMs);
          const ease = 1 - Math.pow(1 - progress, 3);
          const curX = startX + (targetCoords.x - startX) * ease;
          const curY = startY + (targetCoords.y - startY) * ease;
          marker.setAttribute('transform', `translate(${curX.toFixed(1)}, ${curY.toFixed(1)})`);
          if (progress < 1) {
            glideAnimFrame = requestAnimationFrame(stepAnim);
          }
        }
        glideAnimFrame = requestAnimationFrame(stepAnim);
      }

      function renderMap(animateUser = false) {
        const { stepFree, fastest } = computeRoutes();
        const activeRoute = state.selectedRouteType === 'fastest' ? fastest : stepFree;

        // Full planned route line (Ahead)
        const polyline = document.getElementById('map-route-line');
        const allNodes = activeRoute.pathNodeIds.map((id) => CAMPUS_NODES[id]).filter(Boolean);
        const pointsStr = allNodes.map((n) => `${n.coords.x},${n.coords.y}`).join(' ');
        polyline.setAttribute('points', pointsStr);

        // Traversed route progress line (Green highlight up to current step)
        const completedLine = document.getElementById('map-completed-line');
        if (completedLine) {
          if (state.screen === 'navigation' && (state.isLiveGuiding || state.currentStepIndex > 0)) {
            const sliceEnd = Math.min(allNodes.length, state.currentStepIndex + 2);
            const traversedStr = allNodes.slice(0, sliceEnd).map((n) => `${n.coords.x},${n.coords.y}`).join(' ');
            completedLine.setAttribute('points', traversedStr);
          } else {
            completedLine.setAttribute('points', '');
          }
        }

        // Update Lift B visual status badge on map (Shows red LIFT BLOCKED warning when broken)
        const liftBadge = document.getElementById('map-lift-b-badge');
        if (liftBadge) {
          const isBroken = state.brokenLiftIds.includes('b34_lift_b');
          liftBadge.querySelector('rect').setAttribute('fill', isBroken ? '#7F1D1D' : '#082F49');
          liftBadge.querySelector('rect').setAttribute('stroke', isBroken ? '#F87171' : '#38BDF8');
          liftBadge.querySelector('text').setAttribute('fill', isBroken ? '#FCA5A5' : '#38BDF8');
          liftBadge.querySelector('text').textContent = isBroken ? '⚠️ LIFT X' : 'LIFT B';
        }

        // Render Node Pins
        const nodesLayer = document.getElementById('map-nodes-layer');
        nodesLayer.innerHTML = '';
        SELECTABLE_LOCATIONS.forEach((node) => {
          const isSelected = node.id === state.destId;
          const isMatchFloor = state.activeFloor === 'Outdoor' || node.floor === state.activeFloor;
          const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          g.setAttribute('transform', `translate(${node.coords.x}, ${node.coords.y})`);
          g.setAttribute('opacity', isMatchFloor ? '1' : '0.35');
          g.style.cursor = 'pointer';

          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('r', isSelected ? '9' : '6');
          circle.setAttribute('fill', isSelected ? '#FACC15' : '#38BDF8');
          circle.setAttribute('stroke', '#000000');
          circle.setAttribute('stroke-width', '2');

          const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          label.setAttribute('y', '18');
          label.setAttribute('text-anchor', 'middle');
          label.setAttribute('fill', isSelected ? '#FACC15' : '#E4E4E7');
          label.setAttribute('font-size', '9');
          label.setAttribute('font-weight', '800');
          label.textContent = node.shortName;

          g.appendChild(circle);
          g.appendChild(label);
          g.addEventListener('click', () => {
            state.destId = node.id;
            populateDropdowns();
            renderAll();
            announce(`Destination set to ${node.name}.`, true);
          });
          nodesLayer.appendChild(g);
        });

        // Update Live User Position
        let userNodeId = state.sourceId;
        if (state.screen === 'navigation' && (state.isLiveGuiding || state.currentStepIndex > 0)) {
          userNodeId = activeRoute.steps[state.currentStepIndex]?.nodeId || state.sourceId;
        }
        const userCoords = (CAMPUS_NODES[userNodeId] || CAMPUS_NODES.b34_ground_lobby).coords;
        if (animateUser) {
          animateUserMarkerTo(userCoords, 950);
        } else {
          if (glideAnimFrame) cancelAnimationFrame(glideAnimFrame);
          document.getElementById('map-user-marker').setAttribute('transform', `translate(${userCoords.x}, ${userCoords.y})`);
        }
      }

      // 10. PREPARE ROUTE ON MAP + GOOGLE MAPS-STYLE START ROUTE CONTROLLER
      function prepareRouteOnMap(routeType, speakPrompt = true, explicitLang = null) {
        stopLiveGuidedJourney(false);
        state.selectedRouteType = routeType;
        state.currentStepIndex = 0;
        state.isLiveGuiding = false;
        state.screen = 'navigation';
        state.showMap = true;
        document.getElementById('map-panel').classList.remove('hidden');
        document.getElementById('btn-toggle-map').textContent = 'Hide Map';

        const routes = computeRoutes();
        const activeRoute = routeType === 'fastest' ? routes.fastest : routes.stepFree;
        const firstTurn = activeRoute.steps[0]?.turn?.spoken || 'Go straight';
        switchFloor(CAMPUS_NODES[state.sourceId].floor || 'Outdoor');
        renderAll(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (speakPrompt) {
          const lang = explicitLang || (state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang);
          const msg =
            lang === 'hi-IN'
              ? `${CAMPUS_NODES[state.sourceId].name} से ${CAMPUS_NODES[state.destId].name} का रास्ता मैप पर तैयार है। ${activeRoute.totalDistanceMeters} मीटर बाकी हैं। शुरू करने के लिए स्टार्ट रूट दबाएं।`
              : `Route ready on map from ${CAMPUS_NODES[state.sourceId].name} to ${CAMPUS_NODES[state.destId].name}. ${activeRoute.totalDistanceMeters} meters left to reach destination. First direction: ${firstTurn}. Press Start Route to begin.`;
          announce(msg, true, lang);
        }
      }

      function startLiveGuidedJourney() {
        const routes = computeRoutes();
        const activeRoute = state.selectedRouteType === 'fastest' ? routes.fastest : routes.stepFree;
        state.isLiveGuiding = true;
        state.currentStepIndex = 0;

        const firstStep = activeRoute.steps[0];
        if (firstStep) switchFloor(firstStep.floor);
        renderAll(true);

        const lang = state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang;
        const leftM = getRemainingDistanceMeters(activeRoute, 0, true);
        announce(
          `Starting route. ` + formatFullStepNarration(firstStep, 0, activeRoute.steps.length, leftM, lang),
          true,
          lang
        );

        if (liveRouteTimer) clearInterval(liveRouteTimer);
        liveRouteTimer = setInterval(() => {
          if (!state.isLiveGuiding || state.screen !== 'navigation') {
            stopLiveGuidedJourney(false);
            return;
          }
          handleNextStep(true);
        }, 4200);
      }

      function stopLiveGuidedJourney(updateUI = true) {
        state.isLiveGuiding = false;
        if (liveRouteTimer) {
          clearInterval(liveRouteTimer);
          liveRouteTimer = null;
        }
        if (updateUI && state.screen === 'navigation') {
          renderNavigationStep();
        }
      }

      function updateStartButtonUI() {
        const btn = document.getElementById('btn-start-live-route');
        const icon = document.getElementById('start-route-icon');
        const label = document.getElementById('start-route-label');
        const statusLabel = document.getElementById('nav-map-status-label');
        if (!btn) return;

        if (state.isLiveGuiding) {
          btn.className = 'w-full min-h-[64px] px-5 py-3.5 rounded-2xl bg-[#FACC15] border-2 border-[#FEF08A] text-black font-black text-xl flex items-center justify-center gap-2.5 shadow-lg';
          icon.textContent = '⏸';
          label.textContent = 'Navigating Live... (Tap to Pause)';
          if (statusLabel) {
            statusLabel.textContent = '🟢 Live GPS Route Active';
            statusLabel.className = 'text-xs font-extrabold text-[#4ADE80]';
          }
        } else {
          btn.className = 'w-full min-h-[64px] px-5 py-3.5 rounded-2xl bg-[#4ADE80] border-2 border-[#86EFAC] text-black font-black text-xl flex items-center justify-center gap-2.5 shadow-lg';
          icon.textContent = '▶';
          label.textContent = state.currentStepIndex > 0 ? 'Resume Route' : 'Start Route';
          if (statusLabel) {
            statusLabel.textContent = '🗺️ Route Ready • Press Start';
            statusLabel.className = 'text-xs font-extrabold text-[#FACC15]';
          }
        }
      }

      function renderNavigationStep() {
        const routes = computeRoutes();
        const activeRoute = state.selectedRouteType === 'fastest' ? routes.fastest : routes.stepFree;
        const step = activeRoute.steps[state.currentStepIndex] || activeRoute.steps[0];
        const isStarted = state.isLiveGuiding || state.currentStepIndex > 0;
        const leftMeters = getRemainingDistanceMeters(activeRoute, state.currentStepIndex, isStarted);
        const leftMin = Math.max(1, Math.ceil((leftMeters / Math.max(1, activeRoute.totalDistanceMeters)) * activeRoute.estimatedMinutes));
        const pctDone = activeRoute.totalDistanceMeters > 0
          ? Math.min(100, Math.round(((activeRoute.totalDistanceMeters - leftMeters) / activeRoute.totalDistanceMeters) * 100))
          : 100;

        document.getElementById('nav-step-counter').textContent = state.isLiveGuiding
          ? `Live Guidance • Step ${state.currentStepIndex + 1} of ${activeRoute.steps.length}`
          : `Route Ready (${activeRoute.estimatedMinutes} min) • Step ${state.currentStepIndex + 1} of ${activeRoute.steps.length}`;
        document.getElementById('nav-title').textContent = `To ${CAMPUS_NODES[state.destId].shortName}`;
        document.getElementById('nav-route-summary').textContent = `From ${CAMPUS_NODES[state.sourceId].shortName} → To ${CAMPUS_NODES[state.destId].shortName}`;
        document.getElementById('nav-remaining-dist').textContent = leftMeters > 0
          ? `${leftMeters} m left (~${leftMin} min)`
          : '0 m left (At Destination)';
        document.getElementById('nav-progress-pct').textContent = `${pctDone}% Done`;
        document.getElementById('nav-turn-badge').textContent = step.turn ? `${step.turn.icon} ${step.turn.label}` : '⬆️ Go Straight';
        document.getElementById('nav-floor-badge').textContent = `${step.floor} • ${step.building}`;
        document.getElementById('nav-map-floor-indicator').textContent = `Floor: ${step.floor}`;
        document.getElementById('nav-dist-badge').textContent = step.distance;
        document.getElementById('nav-landmark-title').textContent = `${step.turn ? step.turn.icon + ' ' : ''}${step.landmark}`;
        document.getElementById('nav-instruction-text').textContent = step.standardInstruction;
        document.getElementById('nav-sensory-text').textContent = step.sensoryLandmark;
        document.getElementById('btn-prev-step').disabled = state.currentStepIndex === 0;
        document.getElementById('btn-next-step').textContent =
          state.currentStepIndex === activeRoute.steps.length - 1 ? 'Arrived! ✓' : 'Next Step →';

        updateStartButtonUI();
      }

      function handleNextStep(fromAutoTimer = false) {
        const routes = computeRoutes();
        const activeRoute = state.selectedRouteType === 'fastest' ? routes.fastest : routes.stepFree;
        const lang = state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang;
        if (state.currentStepIndex < activeRoute.steps.length - 1) {
          state.currentStepIndex += 1;
          const next = activeRoute.steps[state.currentStepIndex];
          const leftM = getRemainingDistanceMeters(activeRoute, state.currentStepIndex, true);
          switchFloor(next.floor);
          renderAll(true);
          announce(formatFullStepNarration(next, state.currentStepIndex, activeRoute.steps.length, leftM, lang), true, lang);
        } else {
          stopLiveGuidedJourney(false);
          state.screen = 'completed';
          const dest = CAMPUS_NODES[state.destId];
          document.getElementById('arrived-dest-text').textContent = dest.name;
          document.getElementById('arrived-sensory-text').textContent = dest.sensoryLandmark;
          renderAll();
          announce(`You have reached your destination, ${dest.name}. 0 meters left. ${dest.sensoryLandmark}`, true, lang);
        }
      }

      function handlePrevStep() {
        stopLiveGuidedJourney(false);
        if (state.currentStepIndex > 0) {
          state.currentStepIndex -= 1;
          const routes = computeRoutes();
          const activeRoute = state.selectedRouteType === 'fastest' ? routes.fastest : routes.stepFree;
          const prev = activeRoute.steps[state.currentStepIndex];
          const leftM = getRemainingDistanceMeters(activeRoute, state.currentStepIndex, true);
          const lang = state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang;
          switchFloor(prev.floor);
          renderAll(true);
          announce(formatFullStepNarration(prev, state.currentStepIndex, activeRoute.steps.length, leftM, lang), true, lang);
        }
      }

      // 11. JUDGES DEMO & QR SECTION TRIGGERS
      function triggerGateQrDemo() {
        stopLiveGuidedJourney(false);
        state.sourceId = 'main_gate_plaza';
        state.activeFloor = 'Outdoor';
        state.selectedCategory = 'food_court';
        populateDropdowns();
        renderAll();
        document.getElementById('modal-demo').classList.remove('hidden');
        announce(
          'Main Gate QR scanned. Current spot set to Main Gate QR Plaza. Real LPU campus Google Map is open.',
          true
        );
      }

      function triggerBrokenLiftDemo(customReason = 'Block 34 Lift B is Not Working — Way Blocked!') {
        if (!state.brokenLiftIds.includes('b34_lift_b')) {
          state.brokenLiftIds.push('b34_lift_b');
        }
        state.selectedRouteType = 'step-free';
        document.getElementById('hazard-banner-title').textContent = `⚠️ WARNING: ${customReason}`;
        document.getElementById('nav-hazard-alert-text').textContent =
          `${customReason} Safely rerouted via 1:12 Accessible Ramp and Backup Lift A with zero stairs.`;
        renderAll();
        announce(
          `Warning! ${customReason}. This way is blocked. Safely rerouted via 1:12 Ramp and Backup Lift A with zero stairs.`,
          true
        );
      }

      function renderAll(animateUser = false) {
        const hasHazard = state.brokenLiftIds.length > 0;
        document.getElementById('view-planner').classList.toggle('hidden', state.screen !== 'planner');
        document.getElementById('view-navigation').classList.toggle('hidden', state.screen !== 'navigation');
        document.getElementById('view-completed').classList.toggle('hidden', state.screen !== 'completed');
        document.getElementById('hazard-banner').classList.toggle('hidden', !hasHazard);
        const navHazardCard = document.getElementById('nav-hazard-alert-card');
        if (navHazardCard) navHazardCard.classList.toggle('hidden', !hasHazard);

        // Move the live interactive SVG map seamlessly between Home Planner and Active Navigation
        const mapWrapper = document.getElementById('map-canvas-wrapper');
        const plannerMapPanel = document.getElementById('map-panel');
        const navMapSlot = document.getElementById('nav-live-map-slot');
        const startRouteBtn = document.getElementById('btn-start-live-route');
        if (mapWrapper && plannerMapPanel && navMapSlot) {
          if (state.screen === 'navigation') {
            navMapSlot.insertBefore(mapWrapper, startRouteBtn);
          } else {
            const firstChild = plannerMapPanel.children[1];
            if (firstChild) {
              plannerMapPanel.insertBefore(mapWrapper, firstChild);
            } else {
              plannerMapPanel.appendChild(mapWrapper);
            }
          }
        }

        renderEssentialsList();
        renderRouteCards();
        renderMap(animateUser);
        if (state.screen === 'navigation') renderNavigationStep();
      }

      // 12. EVENT LISTENERS
      document.getElementById('btn-start-live-route').addEventListener('click', () => {
        if (state.isLiveGuiding) {
          stopLiveGuidedJourney(true);
          announce('Route guidance paused.', true);
        } else {
          startLiveGuidedJourney();
        }
      });

      document.getElementById('btn-talkback').addEventListener('click', () => {
        state.talkBackMode = !state.talkBackMode;
        const btn = document.getElementById('btn-talkback');
        btn.setAttribute('aria-pressed', String(state.talkBackMode));
        btn.className = state.talkBackMode
          ? 'min-h-[48px] px-2.5 rounded-xl border-2 bg-[#082F49] border-[#38BDF8] text-[#38BDF8] font-extrabold text-xs flex items-center gap-1 shrink-0'
          : 'min-h-[48px] px-2.5 rounded-xl border-2 bg-[#18181B] border-zinc-600 text-zinc-300 font-extrabold text-xs flex items-center gap-1 shrink-0';
        announce(state.talkBackMode ? 'TalkBack reader turned on.' : 'TalkBack reader turned off.', true);
      });

      document.getElementById('btn-audio').addEventListener('click', () => {
        state.autoSpeak = !state.autoSpeak;
        const btn = document.getElementById('btn-audio');
        btn.setAttribute('aria-pressed', String(state.autoSpeak));
        btn.innerHTML = state.autoSpeak ? '<span>🔊 Audio</span>' : '<span>🔇 Muted</span>';
        btn.className = state.autoSpeak
          ? 'min-h-[48px] px-2.5 rounded-xl border-2 bg-[#052E16] border-[#4ADE80] text-[#4ADE80] font-extrabold text-xs flex items-center gap-1 shrink-0'
          : 'min-h-[48px] px-2.5 rounded-xl border-2 bg-[#18181B] border-zinc-600 text-zinc-300 font-extrabold text-xs flex items-center gap-1 shrink-0';
        if (!state.autoSpeak && 'speechSynthesis' in window) window.speechSynthesis.cancel();
      });

      document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.voiceLang = btn.dataset.lang;
          document.querySelectorAll('.lang-btn').forEach((b) => {
            const active = b.dataset.lang === state.voiceLang;
            b.setAttribute('aria-checked', String(active));
            b.className = active
              ? 'lang-btn min-h-[48px] px-1.5 rounded-xl border font-extrabold text-xs bg-[#FACC15] text-black border-[#FACC15]'
              : 'lang-btn min-h-[48px] px-1.5 rounded-xl border font-extrabold text-xs bg-[#141418] text-zinc-200 border-zinc-700';
          });
          announce(`Voice language set to ${btn.textContent}.`, true, state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang);
        });
      });

      document.querySelectorAll('.profile-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.mobilityProfile = btn.dataset.profile;
          document.querySelectorAll('.profile-btn').forEach((b) => {
            const active = b.dataset.profile === state.mobilityProfile;
            b.setAttribute('aria-checked', String(active));
            b.className = active
              ? 'profile-btn min-h-[50px] px-2 py-2 rounded-2xl border-2 text-xs font-extrabold flex flex-col items-center justify-center bg-[#FACC15] text-black border-[#FACC15]'
              : 'profile-btn min-h-[50px] px-2 py-2 rounded-2xl border-2 text-xs font-extrabold flex flex-col items-center justify-center bg-[#141418] text-zinc-200 border-zinc-700';
          });
          renderAll();
          announce(`Travel mode switched to ${btn.textContent.trim()}.`, true);
        });
      });

      document.querySelectorAll('.cat-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.selectedCategory = btn.dataset.cat;
          document.querySelectorAll('.cat-btn').forEach((b) => {
            const active = b.dataset.cat === state.selectedCategory;
            b.className = active
              ? 'cat-btn min-h-[60px] p-2 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 text-center font-extrabold text-xs bg-[#FACC15] text-black border-[#FACC15]'
              : 'cat-btn min-h-[60px] p-2 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 text-center font-extrabold text-xs bg-black text-zinc-200 border-zinc-700';
          });
          renderEssentialsList();
          announce(`Showing nearest ${btn.textContent.trim()}.`, true);
        });
      });

      document.querySelectorAll('.preset-cmd-btn').forEach((btn) => {
        btn.addEventListener('click', () => executeVoiceCommand(btn.dataset.cmd));
      });

      document.getElementById('btn-voice-mic').addEventListener('click', () => toggleVoiceRecognition(false));
      document.getElementById('btn-handsfree').addEventListener('click', () => {
        state.continuousVoice = !state.continuousVoice;
        updateMicUI();
        if (state.continuousVoice) toggleVoiceRecognition(true);
        else stopActiveRecognition();
      });

      document.getElementById('select-source').addEventListener('change', (e) => {
        state.sourceId = e.target.value;
        renderAll();
      });

      document.getElementById('select-dest').addEventListener('change', (e) => {
        state.destId = e.target.value;
        renderAll();
      });

      document.getElementById('btn-swap').addEventListener('click', () => {
        const tmp = state.sourceId;
        state.sourceId = state.destId;
        state.destId = tmp;
        populateDropdowns();
        renderAll();
        announce('Start and destination swapped.', true);
      });

      document.getElementById('btn-toggle-map').addEventListener('click', () => {
        state.showMap = !state.showMap;
        document.getElementById('map-panel').classList.toggle('hidden', !state.showMap);
        document.getElementById('btn-toggle-map').textContent = state.showMap ? 'Hide Map' : 'Show Map';
      });

      document.querySelectorAll('.floor-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          switchFloor(btn.dataset.floor);
        });
      });

      document.getElementById('btn-describe-map').addEventListener('click', () => {
        describeMapAloud(state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang);
      });

      document.getElementById('btn-zoom-in').addEventListener('click', () => {
        state.mapZoom = Math.min(1.6, +(state.mapZoom + 0.2).toFixed(1));
        applyMapZoom();
        announce(`Map zoomed in to ${Math.round(state.mapZoom * 100)} percent.`, true);
      });

      document.getElementById('btn-zoom-out').addEventListener('click', () => {
        state.mapZoom = Math.max(0.8, +(state.mapZoom - 0.2).toFixed(1));
        applyMapZoom();
        announce(`Map zoomed out to ${Math.round(state.mapZoom * 100)} percent.`, true);
      });

      document.getElementById('btn-gate-qr').addEventListener('click', triggerGateQrDemo);
      document.getElementById('btn-restore-lift').addEventListener('click', () => {
        state.brokenLiftIds = [];
        renderAll();
        announce('Lift B restored to normal service.', true);
      });

      document.getElementById('btn-exit-nav').addEventListener('click', () => {
        stopLiveGuidedJourney(false);
        state.screen = 'planner';
        renderAll();
      });
      document.getElementById('btn-back-home').addEventListener('click', () => {
        stopLiveGuidedJourney(false);
        state.screen = 'planner';
        renderAll();
      });
      document.getElementById('btn-arrived-voice').addEventListener('click', () => toggleVoiceRecognition(false));
      document.getElementById('btn-next-step').addEventListener('click', () => {
        stopLiveGuidedJourney(false);
        handleNextStep(false);
      });
      document.getElementById('btn-prev-step').addEventListener('click', handlePrevStep);
      document.getElementById('btn-nav-voice').addEventListener('click', () => toggleVoiceRecognition(false));
      document.getElementById('btn-repeat-step').addEventListener('click', () => {
        const routes = computeRoutes();
        const activeRoute = state.selectedRouteType === 'fastest' ? routes.fastest : routes.stepFree;
        const step = activeRoute.steps[state.currentStepIndex];
        const leftM = getRemainingDistanceMeters(activeRoute, state.currentStepIndex, true);
        const lang = state.voiceLang === 'auto' ? 'en-IN' : state.voiceLang;
        announce(formatFullStepNarration(step, state.currentStepIndex, activeRoute.steps.length, leftM, lang), true, lang);
      });

      // Hazard & Demo Modals
      document.getElementById('btn-report-hazard').addEventListener('click', () => {
        document.getElementById('modal-hazard').classList.remove('hidden');
      });
      document.getElementById('btn-close-hazard').addEventListener('click', () => {
        document.getElementById('modal-hazard').classList.add('hidden');
      });
      document.querySelectorAll('.hazard-choice').forEach((btn) => {
        btn.addEventListener('click', () => {
          document.getElementById('modal-hazard').classList.add('hidden');
          triggerBrokenLiftDemo(btn.dataset.hazard);
        });
      });

      document.getElementById('btn-open-demo').addEventListener('click', () => {
        document.getElementById('modal-demo').classList.remove('hidden');
      });
      document.getElementById('btn-close-demo').addEventListener('click', () => {
        document.getElementById('modal-demo').classList.add('hidden');
      });
      document.getElementById('btn-demo-step1').addEventListener('click', () => {
        triggerGateQrDemo();
      });
      document.getElementById('btn-demo-step2').addEventListener('click', () => {
        document.getElementById('modal-demo').classList.add('hidden');
        executeVoiceCommand('From Main Gate to Block 38');
      });
      document.getElementById('btn-demo-step3').addEventListener('click', () => {
        document.getElementById('modal-demo').classList.add('hidden');
        triggerBrokenLiftDemo('Block 34 Lift B is Not Working — Way Blocked!');
      });

      // Initial Boot
      populateDropdowns();
      renderAll();
    })();
