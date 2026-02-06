import React from 'react';
import { Shield, Mic, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const MonitoringItem = ({ icon, title, subtitle, status, alerts }) => (
  <div className={`p-4 rounded-lg transition-all duration-200 ${status === 'warning' ? 'bg-red-50 border-l-4 border-red-400' : 'bg-gray-50'}`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <p className="font-semibold text-brand-text">{title}</p>
          <p className="text-sm text-brand-text-light">{subtitle}</p>
        </div>
      </div>
      {status === 'success' && <CheckCircle className="h-6 w-6 text-green-500" />}
      {status === 'warning' && <AlertTriangle className="h-6 w-6 text-red-500" />}
    </div>
    {alerts && (
      <div className="mt-4 pl-10 space-y-2">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-red-100/50 rounded-md">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <p className="text-sm text-red-700">{alert.text}</p>
            </div>
            <button className="text-sm font-medium text-brand-primary hover:underline">{alert.action}</button>
          </div>
        ))}
      </div>
    )}
  </div>
);

const IntegrityMonitoringUI = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200/80">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-brand-primary" />
          <h3 className="text-lg font-bold text-brand-text">Integrity monitoring</h3>
        </div>
        <span className="text-xs font-medium text-red-500 bg-red-100 px-2 py-1 rounded-full flex items-center gap-1">
          <AlertTriangle className="h-3 w-3" />
          <span>2 Flags</span>
        </span>
      </div>
      <div className="space-y-4">
        <MonitoringItem 
          icon={<Mic className="h-6 w-6 text-brand-text-light" />} 
          title="Audio environment" 
          subtitle="Clear and unassisted communicat..." 
          status="success"
        />
        <MonitoringItem 
          icon={<Clock className="h-6 w-6 text-brand-text-light" />} 
          title="Response timing" 
          subtitle="Irregular response cadence"
          status="warning"
          alerts={[
            { text: 'Detected at 09:12', action: 'Jump to moment' },
            { text: 'Detected at 10:45', action: 'Jump to moment' },
          ]}
        />
        <MonitoringItem 
          icon={<CheckCircle className="h-6 w-6 text-brand-text-light" />} 
          title="Interview focus" 
          subtitle="Dedicated attention to asses..."
          status="success"
        />
      </div>
    </div>
  );
};

export default IntegrityMonitoringUI;
