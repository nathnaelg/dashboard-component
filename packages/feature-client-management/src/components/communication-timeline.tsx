"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@monorepo/ui-components"
import { formatRelativeTime } from "@monorepo/utils"
import { Mail, Phone, Calendar, FileText, MessageCircle } from "lucide-react"
import type { Communication } from "../types/client"

interface CommunicationTimelineProps {
  communications: Communication[]
  clientId?: string
}

const getIcon = (type: Communication["type"]) => {
  switch (type) {
    case "email":
      return <Mail className="h-4 w-4" />
    case "call":
      return <Phone className="h-4 w-4" />
    case "meeting":
      return <Calendar className="h-4 w-4" />
    case "note":
      return <FileText className="h-4 w-4" />
    default:
      return <MessageCircle className="h-4 w-4" />
  }
}

const getOutcomeColor = (outcome?: Communication["outcome"]) => {
  switch (outcome) {
    case "positive":
      return "text-green-600 bg-green-50"
    case "negative":
      return "text-red-600 bg-red-50"
    case "neutral":
    default:
      return "text-yellow-600 bg-yellow-50"
  }
}

export function CommunicationTimeline({ communications, clientId }: CommunicationTimelineProps) {
  const filteredCommunications = React.useMemo(() => {
    if (!clientId) return communications
    return communications.filter((comm) => comm.clientId === clientId)
  }, [communications, clientId])

  const sortedCommunications = React.useMemo(() => {
    return [...filteredCommunications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [filteredCommunications])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Communication Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sortedCommunications.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No communications recorded yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedCommunications.map((communication, index) => (
              <div key={communication.id} className="flex gap-4">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {getIcon(communication.type)}
                  </div>
                  {index < sortedCommunications.length - 1 && <div className="w-px h-8 bg-border mt-2" />}
                </div>

                {/* Communication content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{communication.subject}</h4>
                      <span className="text-xs text-muted-foreground capitalize">{communication.type}</span>
                      {communication.outcome && (
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getOutcomeColor(communication.outcome)}`}
                        >
                          {communication.outcome}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{formatRelativeTime(communication.date)}</div>
                  </div>

                  <p className="text-sm text-muted-foreground">{communication.content}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>By {communication.createdBy}</span>
                    {communication.followUpRequired && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                        Follow-up required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
