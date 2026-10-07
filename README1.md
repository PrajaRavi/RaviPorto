```python

def bankeralgo():
  process=[{'id':"1","A_allo":1,"B_allo":2,"C_allo":3,"A_max":3,"B_max":6,"C_max":7},{'id':"2","A_allo":2,"B_allo":3,"C_allo":4,"A_max":3,"B_max":6,"C_max":5},{'id':"3","A_allo":1,"B_allo":2,"C_allo":3,"A_max":3,"B_max":6,"C_max":7},{'id':"4","A_allo":4,"B_allo":5,"C_allo":6,"A_max":5,"B_max":6,"C_max":7}]
#   we already have the allocated resource data and max need now i have to find remaning need
  print(f"{'PID':<5}{'A':<5}{'B':<5}{'C':<5}{'A_max':<5}{'B_max':<5}{'C_max':<5}")
  for p in process:
    print(f"{p['id']:<5}{p['A_allo']:<5}{p['B_allo']:<5}{p['C_allo']:<5}{p['A_max']:<5}{p['B_max']:<5}{p['C_max']:<5}")
  A_max_provided=10
  B_max_provided=20
  C_max_provided=18
  A_allocated=0
  B_allocated=0
  C_allocated=0
  scheduled_process=[]
    #first calculate that how much resources are used by all the process
  for p in process:
    A_allocated+=p['A_allo']
    B_allocated+=p['B_allo']
    C_allocated+=p['C_allo']
  A_avail=A_max_provided-A_allocated
  B_avail=B_max_provided-B_allocated
  C_avail=C_max_provided-C_allocated
  remain_need_process=[]
  for p in process:
    remain_A=p['A_max']-p["A_allo"]
    remain_B=p['B_max']-p["B_allo"]
    remain_C=p['C_max']-p["C_allo"]
    remain_need_process.append({"A":remain_A,"B":remain_B,"C":remain_C,"id":p['id']})
  while(len(remain_need_process)>0):
    print("Available",A_avail,B_avail,C_avail)

    sched_proce=min(remain_need_process,key=lambda x:(x['A'],x['B'],x['C']))
    # print(sched_proce)
    print(sched_proce)
    print(remain_need_process)
    if(A_avail>=sched_proce['A'] and B_avail>=sched_proce['B'] and C_avail>=sched_proce['C'] ):
        scheduled_process.append(sched_proce)

        remain_need_process=[item for item in remain_need_process if item["id"]!=sched_proce["id"]]
        A_avail+=sched_proce["A"]
        B_avail+=sched_proce["B"]
        C_avail+=sched_proce["C"]
        print("="*100) 
    else:
      print("Deadlock occur")
      return

def fcfs_scheduling():
    # Step 1: Take input for the number of processes
    n = int(input("Enter the number of processes: "))
    processes = []

    # Step 2: Take input for Arrival Time (AT) and Burst Time (BT) for each process
    for i in range(n):
        pid = f"p{i+1}"
        print(f"\n--- Enter details for Process {pid} ---")
        at = int(input(f"Arrival Time (AT) for {pid}: "))
        bt = int(input(f"Burst Time (BT) for {pid}: "))
        processes.append({"pid": pid, "at": at, "bt": bt})

    # Sort processes by Arrival Time to ensure proper FCFS execution order
    processes.sort(key=lambda x: x["at"])

    # Step 3: Display the input table with rows for Process ID, AT, and BT
    print("\n" + "="*50)
    print("INITIAL PROCESS TABLE")
    print("="*50)
    
    # Row 1: Process IDs
    print(f"{'Process ID':<15} : " + "  ".join([f"{p['pid']:<5}" for p in processes]))
    # Row 2: Arrival Times
    print(f"{'Arrival Time':<15} : " + "  ".join([f"{p['at']:<5}" for p in processes]))
    # Row 3: Burst Times
    print(f"{'Burst Time':<15} : " + "  ".join([f"{p['bt']:<5}" for p in processes]))
    print("="*50)

    # Step 4: Further processing (Calculate CT, TAT, WT)
    current_time = 0
    total_wt = 0
    total_tat = 0

    for p in processes:
        # If the CPU is idle until the process arrives
        if current_time < p["at"]:
            current_time = p["at"]
        
        p["ct"] = current_time + p["bt"]     # Completion Time
        current_time = p["ct"]
        
        p["tat"] = p["ct"] - p["at"]         # Turnaround Time = CT - AT
        p["wt"] = p["tat"] - p["bt"]         # Waiting Time = TAT - BT
        
        total_wt += p["wt"]
        total_tat += p["tat"]

    # Step 5: Display final detailed result table
    print("\n" + "="*60)
    print("FCFS SCHEDULING RESULT TABLE")
    print("="*60)
    print(f"{'Process':<10}{'AT':<10}{'BT':<10}{'CT':<10}{'TAT':<10}{'WT':<10}")
    print("-" * 60)
    
    for p in processes:
        print(f"{p['pid']:<10}{p['at']:<10}{p['bt']:<10}{p['ct']:<10}{p['tat']:<10}{p['wt']:<10}")
    
    print("-" * 60)

    # Step 6: Calculate and show average waiting time and average turnaround time
    avg_wt = total_wt / n
    avg_tat = total_tat / n

    print(f"\nAverage Waiting Time: {avg_wt:.2f}")
    print(f"Average Turnaround Time: {avg_tat:.2f}")

if __name__ == "__main__":
    fcfs_scheduling()

def sjf_scheduling():
    # Step 1: Take input for the number of processes
    n = int(input("Enter the number of processes: "))
    processes = []

    # Step 2: Take input for Arrival Time (AT) and Burst Time (BT) for each process
    for i in range(n):
        pid = f"p{i+1}"
        print(f"\n--- Enter details for Process {pid} ---")
        at = int(input(f"Arrival Time (AT) for {pid}: "))
        bt = int(input(f"Burst Time (BT) for {pid}: "))
        processes.append({"pid": pid, "at": at, "bt": bt, "completed": False})

    # Sort processes by Arrival Time initially for a neat input display table
    processes_display = sorted(processes, key=lambda x: x["at"])

    # Step 3: Display the input table with rows for Process ID, AT, and BT
    print("\n" + "="*50)
    print("INITIAL PROCESS TABLE")
    print("="*50)
    
    # Row 1: Process IDs
    print(f"{'Process ID':<15} : " + "  ".join([f"{p['pid']:<5}" for p in processes_display]))
    # Row 2: Arrival Times
    print(f"{'Arrival Time':<15} : " + "  ".join([f"{p['at']:<5}" for p in processes_display]))
    # Row 3: Burst Times
    print(f"{'Burst Time':<15} : " + "  ".join([f"{p['bt']:<5}" for p in processes_display]))
    print("="*50)

    # Step 4: SJF Processing Logic (Non-Preemptive)
    current_time = 0
    completed = 0
    total_wt = 0
    total_tat = 0
    scheduled_processes = []

    while completed < n:
        # Find all processes that have arrived by current_time and are not yet completed
        available = [p for p in processes if p["at"] <= current_time and not p["completed"]]
        
        if not available:
            # If CPU is idle, jump time to the next arriving process
            uncompleted = [p for p in processes if not p["completed"]]
            if uncompleted:
                next_p = min(uncompleted, key=lambda x: x["at"])
                current_time = next_p["at"]
            continue
        
        # Pick the process with the shortest Burst Time (BT)
        # Tie-breaker: if BTs are equal, pick the one with the earliest Arrival Time (AT)
        
        shortest = min(available, key=lambda x: (x["bt"], x["at"]))
        # !here this min function retruns the refrance of the actual object inside list it doesn't return copy of that object so changes in that object will also happend the object inside the list because both are same

        # Calculate scheduling metrics 
        shortest["ct"] = current_time + shortest["bt"]     # Completion Time
        current_time = shortest["ct"]
        
        shortest["tat"] = shortest["ct"] - shortest["at"]   # Turnaround Time
        shortest["wt"] = shortest["tat"] - shortest["bt"]   # Waiting Time
        
        shortest["completed"] = True
        completed += 1
        
        total_wt += shortest["wt"]
        total_tat += shortest["tat"]
        
        scheduled_processes.append(shortest)

    # Sort final output list by Completion Time or Process ID for a clean summary table
    scheduled_processes.sort(key=lambda x: x["ct"])

    # Step 5: Display final detailed result table
    print("\n" + "="*60)
    print("SJF (NON-PREEMPTIVE) SCHEDULING RESULT TABLE")
    print("="*60)
    print(f"{'Process':<10}{'AT':<10}{'BT':<10}{'CT':<10}{'TAT':<10}{'WT':<10}")
    print("-" * 60)
    
    for p in scheduled_processes:
        print(f"{p['pid']:<10}{p['at']:<10}{p['bt']:<10}{p['ct']:<10}{p['tat']:<10}{p['wt']:<10}")
    
    print("-" * 60)

    # Step 6: Calculate and show average waiting time and average turnaround time
    avg_wt = total_wt / n
    avg_tat = total_tat / n

    print(f"\nAverage Waiting Time: {avg_wt:.2f}")
    print(f"Average Turnaround Time: {avg_tat:.2f}")

if __name__ == "__main__":
    sjf_scheduling()

def priority_scheduling():
    # Step 1: Take input for the number of processes
    n = int(input("Enter the number of processes: "))
    processes = []

    # Step 2: Take input for Arrival Time (AT), Burst Time (BT), and Priority
    for i in range(n):
        pid = f"p{i+1}"
        print(f"\n--- Enter details for Process {pid} ---")
        at = int(input(f"Arrival Time (AT) for {pid}: "))
        bt = int(input(f"Burst Time (BT) for {pid}: "))
        # Note: Lower numerical value means higher priority (e.g., Priority 1 > Priority 3)
        priority = int(input(f"Priority for {pid} (Lower number = Higher priority): "))
        processes.append({"pid": pid, "at": at, "bt": bt, "priority": priority, "completed": False})

    # Sort processes by Arrival Time initially for a neat input display table
    processes_display = sorted(processes, key=lambda x: x["at"])

    # Step 3: Display the input table with rows for Process ID, AT, BT, and Priority
    print("\n" + "="*60)
    print("INITIAL PROCESS TABLE")
    print("="*60)
    
    # Row 1: Process IDs
    print(f"{'Process ID':<15} : " + "  ".join([f"{p['pid']:<5}" for p in processes_display]))
    # Row 2: Arrival Times
    print(f"{'Arrival Time':<15} : " + "  ".join([f"{p['at']:<5}" for p in processes_display]))
    # Row 3: Burst Times
    print(f"{'Burst Time':<15} : " + "  ".join([f"{p['bt']:<5}" for p in processes_display]))
    # Row 4: Priorities
    print(f"{'Priority':<15} : " + "  ".join([f"{p['priority']:<5}" for p in processes_display]))
    print("="*60)

    # Step 4: Priority Scheduling Logic (Non-Preemptive)
    current_time = 0
    completed = 0
    total_wt = 0
    total_tat = 0
    scheduled_processes = []

    while completed < n:
        # Find all processes that have arrived by current_time and are not yet completed
        available = [p for p in processes if p["at"] <= current_time and not p["completed"]]
        
        if not available:
            # If CPU is idle, jump time to the next arriving process
            uncompleted = [p for p in processes if not p["completed"]]
            if uncompleted:
                next_p = min(uncompleted, key=lambda x: x["at"])
                current_time = next_p["at"]
            continue
        
        # Pick the process with the highest priority (lowest numerical value)
        # Tie-breaker: if priorities are equal, pick the one with the earliest Arrival Time (AT)
        highest_priority = min(available, key=lambda x: (x["priority"], x["at"]))
        
        # Calculate scheduling metrics
        highest_priority["ct"] = current_time + highest_priority["bt"]     # Completion Time
        current_time = highest_priority["ct"]
        
        highest_priority["tat"] = highest_priority["ct"] - highest_priority["at"]   # Turnaround Time
        highest_priority["wt"] = highest_priority["tat"] - highest_priority["bt"]   # Waiting Time
        
        highest_priority["completed"] = True
        completed += 1
        
        total_wt += highest_priority["wt"]
        total_tat += highest_priority["tat"]
        
        scheduled_processes.append(highest_priority)

    # Sort final output list by Completion Time for a clean summary table
    scheduled_processes.sort(key=lambda x: x["ct"])

    # Step 5: Display final detailed result table
    print("\n" + "="*65)
    print("PRIORITY SCHEDULING (NON-PREEMPTIVE) RESULT TABLE")
    print("="*65)
    print(f"{'Process':<10}{'AT':<10}{'BT':<10}{'Priority':<10}{'CT':<10}{'TAT':<10}{'WT':<10}")
    print("-" * 65)
    
    for p in scheduled_processes:
        print(f"{p['pid']:<10}{p['at']:<10}{p['bt']:<10}{p['priority']:<10}{p['ct']:<10}{p['tat']:<10}{p['wt']:<10}")
    
    print("-" * 65)

    # Step 6: Calculate and show average waiting time and average turnaround time
    avg_wt = total_wt / n
    avg_tat = total_tat / n

    print(f"\nAverage Waiting Time: {avg_wt:.2f}")
    print(f"Average Turnaround Time: {avg_tat:.2f}")

if __name__ == "__main__":
    priority_scheduling()

```
```
raviporto
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ mern-copy1.png
│  │  ├─ mern.png
│  │  ├─ mongodb-icon.png
│  │  ├─ nginx-icon.png
│  │  ├─ node-js-icon.png
│  │  ├─ RaviResume.pdf
│  │  ├─ react.png
│  │  ├─ redis-512px.png
│  │  └─ video
│  │     ├─ ExpenseTracker.mp4
│  │     └─ MusicWeb.mp4
│  ├─ components
│  │  ├─ About.jsx
│  │  ├─ Architecture.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Skills.jsx
│  │  └─ Terminal.jsx
│  ├─ data
│  │  └─ index.js
│  ├─ hooks
│  │  └─ useTheme.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ {components,hooks,data}
├─ tailwind.config.js
└─ vite.config.js

```