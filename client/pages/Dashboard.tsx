import Card from '../components/utils/Card/Card'
import PetCard from '../components/utils/PetCard/PetCard'
import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
import Sidebar from '../components/utils/Sidebar/Sidebar'

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <Card title="My Pets" addAction="Add Pet">
          <div className="space-y-4">
            <PetCard name="Gary" imageUrl="https://via.placeholder.com/150" />
            <PetCard name="Peach" imageUrl="https://via.placeholder.com/150" />
          </div>
        </Card>

        <Card title="My Schedule" addAction="See more events">
          <div className="space-y-4">
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
          </div>
        </Card>

        <Card title="My Events" addAction="Add Event">
          <div className="space-y-4">
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
