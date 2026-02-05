import { HugeiconsIcon } from '@hugeicons/react'
import { FullSignalIcon, Wifi01Icon, BatteryFullIcon } from '@hugeicons/core-free-icons'
import './StatusBar.css'

function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-bar__time">12:30</div>
      <div className="status-bar__icons">
        <div className="status-bar__icons-placeholder">
          <HugeiconsIcon icon={FullSignalIcon} size={14} color="currentColor" strokeWidth={1.5} />
          <HugeiconsIcon icon={Wifi01Icon} size={14} color="currentColor" strokeWidth={1.5} />
          <HugeiconsIcon icon={BatteryFullIcon} size={14} color="currentColor" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export default StatusBar
